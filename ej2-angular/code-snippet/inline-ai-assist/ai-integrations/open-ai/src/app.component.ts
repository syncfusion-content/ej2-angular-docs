import { Component, ViewChild } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, InlineToolbarSettingsModel, ToolbarItemClickEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';

// Initialize Azure OpenAI
const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key'; // Replace with your key
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint'; // Replace with your endpoint
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version'; // Replace to match your resource
const azureDeploymentName = 'Your_Deployment_Name'; // Your Azure OpenAI deployment name

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

  private stopStreaming: boolean = false;

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
        this.inlineAssistComponent.addResponse(htmlResponse as string, i === responseLength);
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
  };

  // Handle user prompt: call Azure OpenAI Chat Completions using fetch API
  public onPromptRequest(args: InlinePromptRequestEventArgs): void {
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
        this.stopStreaming = false;
        this.streamResponse(responseText);
      })
      .catch(error => {
        console.error('Azure OpenAI fetch error:', error);
        this.inlineAssistComponent.addResponse(
          '⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later. '
        );
        this.stopStreaming = true;
      });
  }

  public handleStopResponse(): void {
    this.stopStreaming = true;
  }
}
