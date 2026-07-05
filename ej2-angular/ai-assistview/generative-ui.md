---
layout: post
title: Generative UI in Angular AI AssistView component | Syncfusion
description: Checkout and learn about generative UI with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView 
documentation: ug
domainurl: ##DomainURL##
---

# Generative UI in Angular AI AssistView component

The `Generative UI` in AI AssistView allows you to render dynamic tools and UI elements within the AI AssistView. This enables seamless integration of interactive components based on AI-generated responses.

## Register tools

You can register custom tools using the [registerToolUI](../api/ai-assistview#registertoolui) method. It accepts tool name as string values, template and optional handler function. Tools are invoked by their name within block responses added through `addPromptResponse` method.

> **Note:** Use the blockType as `tool` and provide the tool name with the required properties through `props`. Tool should be registered before adding in responses and tool name should be unique.

### Configure tool template and handler

When registering a tool, you can configure how it appears by specifying a template and implement its behavior through a handler function. The template controls the UI layout, while the handler is provided with the container element and any additional actions needed to enable interactive functionality.

## Add tools in prompt responses

Use the [addPromptResponse](../api/ai-assistview#addpromptresponse) method to dynamically add tools to AI responses by passing the tool blocks in the response.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/generative-ui/add-tool-response/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/generative-ui/add-tool-response/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/generative-ui/add-tool-response" %}

## Configure AI for generative UI responses

You can configure the AI service to return structured JSON blocks through `system prompt`. This ensures that AI-generated content is properly formatted and rendered as interactive tools or text blocks.

The following example demonstrates how to connect your AI service to generate and display dynamic UI components within the AI AssistView.

```ts
import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';

const systemPrompt = `    
    You are an AI assistant that generates Syncfusion AIAssistView blocks.
    
    Return ONLY valid JSON.
    
    Output format:
    {
        "blocks": [
            {
                "blockType": "text",
                "content": "Description"
            },
            {
                "blockType": "tool",
                "toolName": "toolname",
                "props": { ... }
            }
        ]
    }
    Rules:
    1. Always return a single "blocks" array.
    2. Return ONLY valid JSON.
    3. You may return ANY number of blocks.
    4. Whenever weather-related queries are requested, invoke the weather-tool block with blockType "tool" and toolName "weather-tool".
`;

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'control-content',
    template: `<div ejs-aiassistview #aiAssistView (promptRequest)="onPromptRequest($event)"></div>`,
    encapsulation: ViewEncapsulation.None
})
export class AIAssistGenerativeUIComponent implements AfterViewInit {
    @ViewChild('aiAssistView')
    public aiAssistView!: AIAssistViewComponent;

    /**
     * Angular lifecycle hook - Register tools after view initialization
     */
    ngAfterViewInit(): void {
        this.registerTools();
    }

    /**
     * Register custom tools for rendering in AI responses
     */
    private registerTools(): void {
        if (!this.aiAssistView) return;

        // Register Weather Tool UI
        (this.aiAssistView as any).registerToolUI({
            toolName: 'weather-tool',
            template: `<div tabindex="0" class="e-card" id="weather_card" role="button">
                        <div class="e-card-header">
                          <div class="e-card-header-caption">
                            <div class="e-card-header-title">Weather</div>
                            <div class="e-card-sub-title">Location Information</div>
                          </div>
                        </div>
                        <div class="e-card-header weather_report">
                          <div class="e-card-header-image"></div>
                          <div class="e-card-header-caption">
                            <div class="e-card-header-title">Temperature</div>
                            <div class="e-card-sub-title">Weather Conditions</div>
                          </div>
                        </div>
                      </div>`
        });
    }

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        const apiKey = ''; // Your API key here
        const url = ''; // Your AI response URL here
        
        try {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + apiKey
                },
                body: JSON.stringify({
                    model: 'gpt-5',
                    messages: {
                        messages: [
                            { role: 'system', content: systemPrompt },
                            { role: 'user', content: args.prompt }
                        ]
                    },
                    max_output_tokens: 1000
                })
            }).then((response) => response.json()).then((reply) => {
                const message = reply.output.find((item: any) => item.type === 'message');
                const jsonText = (message && message.content && message.content[0] && message.content[0].text) || '{}';
                const aiData = JSON.parse(jsonText);

                this.aiAssistView.addPromptResponse({ blocks: aiData.blocks });
            }).catch((error) => {
                this.aiAssistView.addPromptResponse("We could not reach the AI service; please try again later.");
            });
        } catch (error) {
            this.aiAssistView.addPromptResponse("We could not reach the AI service; please try again later.");
        }
    };
}
```
## See Also

* [About response blocks](./chain-of-thoughts.md)
