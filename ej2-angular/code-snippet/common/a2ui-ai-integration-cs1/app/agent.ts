const AGENT_URL = 'http://localhost:10004';

export interface AgentMessage {
  kind: 'message';
  messageId: string;
  role: 'user';
  parts: ReadonlyArray<{ text?: string; data?: unknown }>;
}

export interface AgentResponse {
  result?: {
    artifacts?: Array<{
      parts?: Array<{ data?: { a2uiEnvelope?: unknown } }>;
    }>;
  };
}

export async function postAgentEnvelope(envelope: {
  jsonrpc: '2.0';
  id: string;
  method: string;
  params: { message: AgentMessage };
}): Promise<AgentResponse> {
  const res = await fetch(AGENT_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(envelope),
  });
  if (!res.ok) {
    throw new Error(`Agent responded with HTTP ${res.status}`);
  }
  return (await res.json()) as AgentResponse;
}

export function extractA2uiEnvelope(
  response: AgentResponse,
): unknown[] | null {
  const messages =
    response?.result?.artifacts?.[0]?.parts?.[0]?.data?.a2uiEnvelope;
  return Array.isArray(messages) ? messages : null;
}