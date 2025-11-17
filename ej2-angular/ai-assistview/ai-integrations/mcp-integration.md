---
layout: post
title: MCP With Angular AI AssistView component | Syncfusion
description:  Checkout and learn about integration of MCP With Azure OpenAI in Angular AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integrate MCP Server with Angular AI AssistView Component

The AI AssistView component integrates with a [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) (MCP) backend to enable conversational AI features powered by OpenAI, along with [local tool](https://modelcontextprotocol.io/docs/develop/connect-local-servers) capabilities such as file-aware analysis via `@mentions` using the [Mention](https://ej2.syncfusion.com/angular/documentation/mention/getting-started) component. This integration allows the component to reference files in prompts using the filenames(`@filename`), inject their contents into the model context, and enables analysis of those files alongside the user prompt.

## Prerequisites

Before integrating `MCP Server`, ensure the following:

* **Node.js**: Version 16 or higher with npm.

* **OpenAI Account**: With access to OpenAI services and a generated API key.

* **Syncfusion AI AssistView**: Package [@syncfusion/ej2-angular-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-angular-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Angular Environment

Follow the [Getting Started](../getting-started) guide to configure and render the AI AssistView component in your Angular application using Angular CLI.

## Install server dependencies

Create a folder for the MCP server (e.g., `mcp-demo`) and install the required packages:

```bash

npm install express cors @modelcontextprotocol/sdk

```

## Configure the MCP Server

Create a file named `mcp-server.mjs` in your server folder. This server:

* Exposes MCP SSE endpoints (/events, /messages) with tools:
    * `text.generate` → Calls OpenAI Chat Completions
    * `fs.read` → Reads a file under a configured base directory
* Provides a REST endpoint `/assist/chat` for the Angular app
* Detects `@filename` in prompts, reads file contents, and attaches them to the conversation for contextual analysis.
* Maintains session history using a `sessionId` sent from the client. The server stores messages in memory for multi-turn conversations.

### Configure OpenAI with MCP Server

1. Sign up or log in to [OpenAI](https://platform.openai.com/login/) and navigate to your [API Keys](https://platform.openai.com/settings/organization/api-keys) page.

2. Generate a new `API key` or use an existing one.

3. Store this API key securely, as it will be used in MCP server.

```bash

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY";

const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({
        model, // Your AI model
        messages: [{ role: 'user', content: String(prompt ?? '') }],
        temperature,
        max_tokens,
        stream: false
    })
});

```

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

{% tabs %}
{% highlight js tabtitle="mcp-server.mjs" %}
{% include code-snippet/ai-assistview/ai-integrations/mcp/mcp-demo/mcp-server.mjs %}
{% endhighlight %}
{% endtabs %}

## Configure AI AssistView with MCP Server

To integrate the MCP server with the Syncfusion AI AssistView component, update the `app.component.ts` file in your Angular application. Type `@` in the prompt box to select and mention files. The contents of these files will be included in the AI context for better code-aware responses.

In the following sample, the [promptRequest](https://ej2.syncfusion.com/angular/documentation/api/ai-assistview/aiassistviewmodel#promptrequest) event sends the user prompt, including `@mentions`, to the MCP server at `/assist/chat`. The server extracts unique mentions, safely reads those files from `FS_BASE_DIR`, and injects them into the conversation as a contextual message and OpenAI receives both the file contents and the prompt, enabling code-aware analysis.

``` bash

const FS_BASE_DIR = "YOUR_FS_BASE_DIR";

// Expose tools via tools/list
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
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

```

> The component uses a `session ID` to maintain conversation history. It is stored in `localStorage` and sent with each request. The MCP server keeps session data in memory, and clicking Clear Prompts resets the session via `/assist/clear`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/mcp/src/app.component.ts %}
{% endhighlight %}

{% highlight js tabtitle="mcp-server.mjs" %}
{% include code-snippet/ai-assistview/ai-integrations/mcp/mcp-demo/mcp-server.mjs %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/ai-integrations/mcp/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/ai-integrations/mcp" %}

## Run and Test

### Start the MCP server:

Navigate to your MCP server folder and run the following command to start the Node.js server:

```bash

node mcp-server.mjs

```

### Start the frontend:

In a separate terminal window, navigate to your project folder and start the development server:

```bash

ng serve

```

Open your app to interact with the AI AssistView component integrated with MCP.

## Troubleshooting

* `401/403 from OpenAI`: Verify your `OPENAI_API_KEY` and model deployment name.
* `File path errors`: Ensure FS_BASE_DIR is correctly set and paths are relative to it.
* `CORS issues`: Confirm the server allows requests from `http://localhost:4200`.
* `SSE stream testing`: Run `curl -N http://localhost:3000/events` to verify the stream is active.
