import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';
import { AzureOpenAI } from 'openai';

const azureOpenAIApiKey = ''; // replace
const azureOpenAIEndpoint = ''; // replace
const azureOpenAIApiVersion = ''; // replace to match your resource
const azureDeploymentName = ''; // replace with your deployment name
 
const client = new AzureOpenAI({
  apiKey: azureOpenAIApiKey,
  endpoint: azureOpenAIEndpoint,
  apiVersion: azureOpenAIApiVersion,
  dangerouslyAllowBrowser: true 
});

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
      <div ejs-aiassistview 
        #assist
        [promptSuggestions]="suggestions"
        [toolbarSettings]="toolbarSettings"
        [bannerTemplate]="bannerTemplate"
        [showHeader]="true"
        (promptRequest)="onPromptRequest($event)"
        (stopRespondingClick)="handleStopResponse()">
        <ng-template #bannerTemplate>
            <div class="banner-content">
                <div class="e-icons e-assistview-icon"></div>
                <h3>AI Assistance</h3>
                <div>To get started, provide input or choose a suggestion.</div>
            </div>
        </ng-template>
    </div>
  `
})
export class AppComponent {
  @ViewChild('assist') aiAssistView!: AIAssistViewComponent;

  public suggestions: string[] = [
    'What are the best tools for organizing my tasks?',
    'How can I maintain work-life balance effectively?'
  ];

  private stopStreaming: boolean = false;

  public toolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
    itemClicked: () => {
      this.aiAssistView.prompts = [];
      this.aiAssistView.promptSuggestions = this.suggestions;
      this.stopStreaming = true;
    }
  };

  public streamResponse = async (response: string) => {
    let lastResponse = "";
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        this.aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
        this.aiAssistView.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
    this.aiAssistView.promptSuggestions = this.suggestions;
  };

  public onPromptRequest(args: PromptRequestEventArgs): void {
    if (!args?.prompt?.trim() || !this.aiAssistView) return;
 
    this.stopStreaming = false;
 
    client.chat.completions
      .create({
        model: azureDeploymentName,
        messages: [{ role: 'user', content: args.prompt }],
        temperature: 0.7
      })
      .then(completion => {
        const responseText =
          completion?.choices?.[0]?.message?.content?.trim() || 'No response received.';
        return this.streamResponse(responseText);
      })
      .catch(error => {
        this.aiAssistView.addPromptResponse(
          '⚠️ Something went wrong while connecting to Azure OpenAI. ' +
            'Verify endpoint, API key, deployment name, API version, and CORS settings.',
          true
        );
      });
  }

  public handleStopResponse(): void {
    this.stopStreaming = true;
    this.aiAssistView.promptSuggestions = this.suggestions;
  }
}