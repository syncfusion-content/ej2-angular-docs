import { Component, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, PromptRequestEventArgs, ToolbarItem, ToolbarItemClickedEventArgs } from '@syncfusion/ej2-angular-interactive-chat'; // Import ToolbarItem if not already
import { marked } from 'marked';

// Initialize Azure OpenAI
const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key'; // Replace with your key
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint'; // Replace with your endpoint
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version'; // Replace to match your resource
const azureDeploymentName = 'Your_Deployment_Name'; // Your Azure OpenAI deployment name

// Initialize AI AssistView component
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
      this.stopStreaming = true; // Stop streaming on refresh
    }
  };

  // Stream the model response to the UI in chunks
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

  // Handle user prompt: call Azure OpenAI Chat Completions using fetch API
  public onPromptRequest(args: PromptRequestEventArgs): void {
    this.stopStreaming = false; // Reset stopStreaming for new request

    const url =
      azureOpenAIEndpoint.replace(/\/$/, '') +
      `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
      `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': azureOpenAIApiKey, // Use 'api-key' for direct Azure OpenAI REST API via fetch
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: args.prompt }],
        max_tokens: 150, // You can adjust this value
        temperature: 0.7, // As per your original code
        stream: false
      }) })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(reply => {
        const responseText = reply.choices[0].message.content.trim() || 'No response received.';
        this.streamResponse(responseText);
      })
      .catch(error => {
        console.error('Azure OpenAI fetch error:', error);
        this.aiAssistView.addPromptResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later. '
        );
        this.stopStreaming = true;
      });
  }

  public handleStopResponse(): void {
    this.stopStreaming = true;
    this.aiAssistView.promptSuggestions = this.suggestions;
  }
}