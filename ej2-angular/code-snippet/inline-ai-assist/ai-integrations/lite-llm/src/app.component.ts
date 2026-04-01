import { Component, ViewChild } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, InlineToolbarSettingsModel, ToolbarItemClickEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';

// Initialize AI AssistView component
@Component({
  standalone: true,
  imports: [InlineAIAssistModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('inlineAssistComponent')
  public inlineAssistComponent!: InlineAIAssistComponent;

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


public inlineToolbarSettings: InlineToolbarSettingsModel = {
    itemClick: (args: ToolbarItemClickEventArgs) => {
        if (args.item && args.item.iconCss === 'e-icons e-inline-stop') {
          this.handleStopResponse();
        }
    }
};

  public itemSelect = (args: ResponseItemSelectEventArgs) => {
      if (args.command.label === 'Accept') {
          const editable = document.getElementById('editableText') as HTMLElement | null;
          if (editable) {
              editable.innerHTML = '<p>' + this.inlineAssistComponent.prompts[this.inlineAssistComponent.prompts.length - 1 ].response + '</p>';
          }
          this.inlineAssistComponent.hidePopup();
      } else if (args.command.label === 'Discard') {
          this.inlineAssistComponent.hidePopup();
      }
  }

  public responseSetting: ResponseSettingsModel = {
      itemSelect:  this.itemSelect
  }

  onClick(): void {
    this.inlineAssistComponent.showPopup();
  }

  public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
    const url = `${this.LITELLM_HOST.replace(/\/$/, '')}/v1/chat/completions`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(this.LITELLM_API_KEY ? { Authorization: `Bearer ${this.LITELLM_API_KEY}` } : {}) },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini', // must match model_name in config.yaml
        messages: [{ role: 'user', content: args.prompt }],
        temperature: 0.7,
        max_tokens: 300,
        stream: false }) })
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
        this.inlineAssistComponent.addResponse(
          'Warning: Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
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
        this.inlineAssistComponent.addResponse(htmlResponse as string, i === responseLength);
      }
      await new Promise((resolve) => setTimeout(resolve, 15));
    }
  };

  public handleStopResponse = () => {
    this.stopStreaming = true;
  };
}