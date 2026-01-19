import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { marked } from 'marked';

// Initialize AI AssistView component
@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
    <div class="ai-litellm-assistview">
      <div
          ejs-aiassistview
          id="aiAssistView"
          #aiAssistViewComponent
          (promptRequest)="onPromptRequest($event)"
          (stopRespondingClick)="handleStopResponse()"
          [promptSuggestions]="promptSuggestions"
          [bannerTemplate]="bannerTemplate"
          [toolbarSettings]="assistViewToolbarSettings"
          [showHeader]="true">
          <ng-template #bannerTemplate>
              <div class="banner-content">
                  <div class="e-icons e-assistview-icon"></div>
                  <h3>How can I help you today?</h3>
              </div>
          </ng-template>
      </div>
  </div>
  `
})
export class AppComponent {
  @ViewChild('aiAssistViewComponent')
  public aiAssistViewComponent!: AIAssistViewComponent;

  // LiteLLM settings
  private readonly LITELLM_HOST = 'http://localhost:4000';

  // LiteLLM proxy auth token:
  // - If your LiteLLM proxy is configured WITH a master_key (router_settings.master_key),
  //   set this to the same value (e.g., 'test_key').
  //
  // - If your LiteLLM proxy does NOT use a master_key, leave this as an empty string ''.
  //   The app will NOT send an Authorization header, which is fine for local-only development.
  private readonly LITELLM_API_KEY = '';

  // Used to cancel streaming
  private stopStreaming = false;

  public promptSuggestions: string[] = [
    "How do I prioritize my tasks?",
    "How can I improve my time management skills?"
  ];

  public assistViewToolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: (args: any) => {
      if (args.item.iconCss === 'e-icons e-refresh') {
        this.aiAssistViewComponent.prompts = [];
        this.aiAssistViewComponent.promptSuggestions = this.promptSuggestions;
        this.stopStreaming = true;
      }
    }
  };

  public onPromptRequest = (args: PromptRequestEventArgs) => {
    const url = `${this.LITELLM_HOST.replace(/\/$/, '')}/v1/chat/completions`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.LITELLM_API_KEY ? { Authorization: `Bearer ${this.LITELLM_API_KEY}` } : {}),
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini', // must match model_name in config.yaml
        messages: [{ role: 'user', content: args.prompt }],
        temperature: 0.7,
        max_tokens: 300,
        stream: false,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((reply) => {
        const responseText =
          reply.choices?.[0]?.message?.content?.trim() || 'No response received.';
        this.stopStreaming = false;
        this.streamResponse(responseText);
      })
      .catch((error) => {
        console.error(error);
        this.aiAssistViewComponent.addPromptResponse(
          'Warning: Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.',
          true
        );
        this.stopStreaming = true;
      });
  };

  private streamResponse = async (response: string) => {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;

    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        this.aiAssistViewComponent.addPromptResponse(htmlResponse, i === responseLength);
        this.aiAssistViewComponent.scrollToBottom();
      }
      await new Promise((resolve) => setTimeout(resolve, 15));
    }
    this.aiAssistViewComponent.promptSuggestions = this.promptSuggestions;
  };

  public handleStopResponse = () => {
    this.stopStreaming = true;
  };
}