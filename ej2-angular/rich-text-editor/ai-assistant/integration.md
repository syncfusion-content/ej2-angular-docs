---
layout: post
title: AI Assistant in Angular Rich Text Editor | Syncfusion
description: Learn about the AI Assistant feature in the Syncfusion Essential JS 2 Angular Rich Text Editor Component.
platform: ej2-angular
control: Integrating the AI Assistant
documentation: ug
domainurl: ##DomainURL##
---

# Integrating the AI Assistant

The **AI Assistant** in the Rich Text Editor provides integrated AI capabilities for simplified content creation, editing, and enhancement. It includes an AssistView presented inside a pop-up interface, a dropdown of predefined prompts, and dedicated toolbar options for initiating AI interactions.

## Usage

The AI Assistant feature introduces two toolbar items: **AICommands** and **AIQuery**.

To enable the AI Assistant:

1. Add the `AIAssistantService` to the **providers** section.
2. Include `AICommands` and `AIQuery` in the `toolbarSettings.items` property.

## Accessing the AI Assistant Popup

The AI Assistant interface can be opened through the following options:

### 1. AI Commands Menu

* The **AI Commands** toolbar option opens a menu containing predefined prompts.
* Available actions include improving, shortening, elaborating, simplifying, summarizing, and performing grammar checks on the selected content.

### 2. AI Query

* The **AI Query** toolbar button or the keyboard shortcut **Alt + Enter** (Windows) / **⌥ + Enter** (Mac) opens a popup for entering custom prompts.
* This option is used to process content based on user-defined queries.

## Request and Response Handling

Executing a prompt triggers the `aiAssistantPromptRequest` event. This event provides the selected text and the prompt, which can be combined and forwarded to an AI provider or backend service.

Once a response is received either as a stream or as a single output it can be added to the AssistView using the `addAIPromptResponse` method.

If the *Stop Responding* button is clicked, the `aiAssistantStopRespondingClick` event is raised to cancel the streaming operation.

> The `addAIPromptResponse` method converts the provided Markdown response into HTML using the `@syncfusion/ej2-markdown-converter` package.

## Streaming Responses

Responses can be streamed into the AssistView to provide a typewriter like effect. The `finalUpdate` parameter of `addAIPromptResponse` determines when the final chunk is processed and the stream ends.

**Example: Streaming Response**

```typescript
const response: Response = await fetch('YOUR_AI_SERVICE_URL' + '/api/stream', {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json',
    "Authorization": 'HANDLE_AUTH_HERE'
  },
  body: JSON.stringify({ message: args.prompt + args.text }),
});

if (!response.ok) {
  const errorData = await response.json();
  throw new Error(errorData.error);
}

const stream: ReadableStream<string> = response.body.pipeThrough(new TextDecoderStream());
let fullText: string = '';

for await (const chunk of stream as unknown as AsyncIterable<string>) {
  fullText += chunk;
  // Updates the UI with each chunk for a streaming effect
  this.editor.addAIPromptResponse(fullText, false);
}

// Final update to signal the end of the stream
this.editor.addAIPromptResponse(fullText, true);
```

## Single Response Handling

A complete response can be inserted at once by setting `finalUpdate` to `true`. While the response is being processed, a loading skeleton is displayed in the AssistView.

**Example: Non-Streaming Response**

```typescript
const response: Response = await fetch('YOUR_AI_SERVICE_URL' + '/api/query', {
  method: 'POST',
  headers: {
    "Content-Type": 'application/json',
    "Authorization": 'HANDLE_AUTH_HERE'
  },
  body: JSON.stringify({ message: args.prompt + args.text }),
});

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const data: string = await response.text();
this.editor.addAIPromptResponse(data, true);
```

## Example Demonstration

A working demonstration of the AI Assistant, showcasing real-time chunk streaming, is available in the following resources:

* **[GitHub Repository](https://github.com/SyncfusionExamples/richtexteditor-ai-assistant-service):** Syncfusion demo with Express.js and OpenAI SDK
* **[Live Demo](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/ai-assistant):** Implementation using the `gpt-4o-mini` model
