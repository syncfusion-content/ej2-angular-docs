import express from 'express';
import cors from 'cors';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { ListToolsRequestSchema, CallToolRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import path from 'node:path';
import fs from 'node:fs/promises';

const app = express();
// CORS for Angular app
app.use(
  cors({
    origin: [
      'http://localhost:4200',
      'http://127.0.0.1:4200'
    ],
    methods: ['POST', 'OPTIONS']
  })
);
// No global body parser for SSE routes; let the transport read the stream directly.

// Low-level MCP server (compatible with SSE transport)
const server = new Server(
  { name: 'openai-mcp-sse', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

const FS_BASE_DIR = "YOUR_FS_BASE_DIR";
const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

// In-memory session store: sessionId -> [{ role: 'user'|'assistant', content: string }]
// Note: In production, replace with a durable store (Redis, DB).
const sessions = new Map();

function getSession(sessionId) {
  if (!sessionId) return null;
  if (!sessions.has(sessionId)) sessions.set(sessionId, []);
  return sessions.get(sessionId);
}

function appendMessage(sessionId, role, content, maxTurns = 10) {
  const hist = getSession(sessionId);
  if (!hist) return;
  hist.push({ role, content });
  // keep only the last maxTurns pairs (~2*maxTurns messages)
  const maxMsgs = maxTurns * 2;
  if (hist.length > maxMsgs) {
    sessions.set(sessionId, hist.slice(-maxMsgs));
  }
}

function safeJoin(base, target) {
  const full = path.resolve(base, target);
  if (!full.startsWith(path.resolve(base))) {
    throw new Error('Path traversal not allowed');
  }
  return full;
}

// Expose tools via tools/list
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'text.generate',
      description: 'Generate text via OpenAI Chat Completions',
      inputSchema: {
        type: 'object',
        properties: {
          prompt: { type: 'string' },
          temperature: { type: 'number' },
          max_tokens: { type: 'number' },
          model: { type: 'string' }
        },
        required: ['prompt']
      }
    },
    {
      name: 'fs.read',
      description: `Read a UTF-8 text file under ${FS_BASE_DIR}`,
      inputSchema: {
        type: 'object',
        properties: { relPath: { type: 'string' }, maxBytes: { type: 'number' } },
        required: ['relPath']
      }
    }
  ]
}));

// Handle tools/call
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  if (name === 'text.generate') {
    if (!OPENAI_API_KEY) {
      return { isError: true, content: [{ type: 'text', text: 'Missing OPENAI_API_KEY' }] };
    }
    const { prompt, temperature = 0.7, max_tokens = 350, model = 'gpt-4o-mini' } = args;
    try {
      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
        body: JSON.stringify({ model, messages: [{ role: 'user', content: String(prompt ?? '') }], temperature, max_tokens, stream: false })
      });
      if (!resp.ok) {
        const err = await resp.text();
        return { isError: true, content: [{ type: 'text', text: `OpenAI error ${resp.status}: ${err.slice(0,500)}` }] };
      }
      const data = await resp.json();
      const text = data?.choices?.[0]?.message?.content ?? '';
      console.log(text);
      return { content: [{ type: 'text', text }] };
    } catch (e) {
      return { isError: true, content: [{ type: 'text', text: `OpenAI fetch failed: ${String(e)}` }] };
    }
  }

  if (name === 'fs.read') {
    try {
      const rel = String(args.relPath || '');
      const full = safeJoin(FS_BASE_DIR, rel);
      const stat = await fs.stat(full);
      if (!stat.isFile()) return { isError: true, content: [{ type: 'text', text: 'Not a file' }] };
      const max = Math.min(Number(args.maxBytes || 200000), 2_000_000);
      const data = await fs.readFile(full);
      const buf = data.slice(0, max);
      const text = buf.toString('utf8');
      return { content: [{ type: 'text', text }] };
    } catch (e) {
      return { isError: true, content: [{ type: 'text', text: `fs.read error: ${String(e)}` }] };
    }
  }
  return { isError: true, content: [{ type: 'text', text: 'Unknown tool' }] };
});

let transport;

// SSE endpoint for events
app.get('/events', async (_req, res) => {
  transport = new SSEServerTransport('/messages', res);
  await server.connect(transport);
});

// POST endpoint for client messages
app.post('/messages', async (req, res) => {
  if (!transport) return res.status(400).send('No active transport');
  await transport.handlePostMessage(req, res);
});

// Simple REST endpoint for AssistView (avoids separate proxy)
app.post('/assist/chat', express.json(), async (req, res) => {
  try {
    const { sessionId, prompt, temperature = 0.7, max_tokens = 350, model = 'gpt-4o-mini' } = req.body || {};
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });
    const sid = String(sessionId || '');
    // Otherwise call OpenAI with @mention file support
    if (!OPENAI_API_KEY) return res.status(500).json({ error: 'Missing OPENAI_API_KEY' });

    // Resolve @mentions in the prompt. Supports @path and @"path with spaces" and @'path with spaces'
    async function resolveMentions(input) {
      const re = /@(?:"([^"]+)"|'([^']+)'|([A-Za-z0-9_\\\/\.\-]+))/g;
      const unique = new Set();
      let m;
      while ((m = re.exec(input)) !== null) {
        const p = m[1] || m[2] || m[3];
        if (p) unique.add(p);
      }
      const files = [];
      for (const p of unique) {
        try {
          const full = safeJoin(FS_BASE_DIR, p);
          const stat = await fs.stat(full);
          if (stat.isFile()) {
            const data = await fs.readFile(full);
            const text = data.subarray(0, 200000).toString('utf8');
            files.push({ path: p, content: text });
          }
        } catch {
          // ignore invalid paths
        }
      }
      return files;
    }

    const attachments = await resolveMentions(String(prompt));

    // Build messages with session history and any attached file contents
    const history = getSession(sid) || [];
    const messages = [...history];
    if (attachments.length) {
      const joined = attachments
        .map(a => `File: ${a.path}\n--- START ---\n${a.content}\n--- END ---`)
        .join('\n\n');
      messages.push({ role: 'user', content: `Here are referenced files via @mentions:\n${joined}` });
    }
    messages.push({ role: 'user', content: String(prompt) });

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
      body: JSON.stringify({ model, messages, temperature, max_tokens, stream: false })
    });
    if (!resp.ok) {
      const err = await resp.text();
      return res.status(resp.status).json({ error: 'OpenAI error', details: err.slice(0, 500) });
    }
    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content ?? '';

    // Update session history
    if (sid) {
      appendMessage(sid, 'user', String(prompt));
      appendMessage(sid, 'assistant', content);
    }

    res.json({ content, raw: data });
  } catch (e) {
    res.status(500).json({ error: String(e?.message || e) });
  }
});

// Clear a session's history
app.post('/assist/clear', express.json(), (req, res) => {
  const { sessionId } = req.body || {};
  if (sessionId && sessions.has(sessionId)) sessions.delete(sessionId);
  res.json({ ok: true });
});

const port = Number(process.env.PORT || 3000);
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`MCP SSE server running at http://localhost:${port}`);
  console.log(`SSE endpoint: http://localhost:${port}/events`);
  console.log(`REST assist endpoint: http://localhost:${port}/assist/chat`);
  console.log(`FS base dir: ${FS_BASE_DIR}`);
});
