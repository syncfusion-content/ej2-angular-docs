/**
 * Tiny helper module that mirrors the React sample's JSON-RPC pattern.
 * Lives in its own file so it can be reused by both the bootstrap
 * `actionHandler` (in `app.config.ts`) and the `AppComponent.sendQuery`
 * callback without a circular import.
 */

export const AGENT_URL = 'http://localhost:10006';

/** Envelope the agent expects at `message/send`. */
export interface AgentEnvelope {
    jsonrpc: '2.0';
    id: string;
    method: string;
    params: {
        message: {
            kind: 'message';
            messageId: string;
            role: 'user';
            parts: ReadonlyArray<{ text?: string; data?: unknown }>;
        };
    };
}

/** Parsed response shape (`result.artifacts[0].parts[0].data.a2uiEnvelope`). */
export interface AgentResponse {
    result?: {
        artifacts?: Array<{
            parts?: Array<{
                data?: { a2uiEnvelope?: unknown };
            }>;
        }>;
    };
}

/**
 * POST a JSON-RPC envelope to the agent and return the parsed JSON response.
 * Throws on network failure or non-2xx responses.
 */
export async function postAgentEnvelope(envelope: AgentEnvelope): Promise<AgentResponse> {
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

/** Extract the `a2uiEnvelope` array from an agent response (typed convenience). */
export function extractA2uiEnvelope(response: AgentResponse): unknown[] | null {
    const messages = response?.result?.artifacts?.[0]?.parts?.[0]?.data?.a2uiEnvelope;
    return Array.isArray(messages) ? messages : null;
}