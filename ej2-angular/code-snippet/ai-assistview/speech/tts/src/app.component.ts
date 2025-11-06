import { Component, ViewChild } from '@angular/core';
import {
  AIAssistViewModule,
  AIAssistViewComponent,
  ToolbarSettingsModel,
  ToolbarItemClickedEventArgs,
  PromptRequestEventArgs,
  ResponseToolbarSettingsModel,
} from '@syncfusion/ej2-angular-interactive-chat';
import * as Marked from 'marked';


const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key'; // replace your key
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint'; // replace your endpoint
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version'; // replace to match your resource
const azureDeploymentName = 'Your_Deployment_Name'; // Your Azure OpenAI deployment name

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
    <div class="integration-texttospeech-section">
      <div
        ejs-aiassistview
        #assistView
        (promptRequest)="onPromptRequest($event)"
        [responseToolbarSettings]="responseToolbarSettings"
        [toolbarSettings]="toolbarSettings"
        (stopRespondingClick)="handleStopResponse()"
      >
        <ng-template #bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-audio"></div>
            <i>Ready to assist voice enabled !</i>
          </div>
        </ng-template>
      </div>
    </div>
  `
})
export class AppComponent {
  @ViewChild('assistView') assistViewInstance!: AIAssistViewComponent;

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this),
  };

  private stopStreaming: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public responseToolbarSettings: ResponseToolbarSettingsModel = {
    items: [
      { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
      { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
      { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
      {
        type: 'Button',
        iconCss: 'e-icons e-assist-dislike',
        tooltip: 'Need Improvement',
      },
    ],
    itemClicked: this.onResponseToolbarItemClicked.bind(this),
  };

  public streamResponse = async (response: string) => {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;

    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = (Marked as any).parse(lastResponse);
        this.assistViewInstance.addPromptResponse(
          htmlResponse,
          i === responseLength
        );
        this.assistViewInstance.scrollToBottom();
      }
      await new Promise((resolve) => setTimeout(resolve, 15)); // Delay for streaming effect
    }
  };

  public onToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    if (args.item!.iconCss === 'e-icons e-refresh') {
      this.assistViewInstance.prompts = [];
      this.stopStreaming = true; // Stop any ongoing streaming
      if (this.currentUtterance) {
        speechSynthesis.cancel();
        this.currentUtterance = null;
      }
    }
  }

  public onResponseToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    const responseHtml = this.assistViewInstance.prompts[args.dataIndex as any].response;

    if (responseHtml) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = responseHtml;
      // Extract text content safely
      const text = (tempDiv.textContent || tempDiv.innerText || '').trim();

      if (
        args.item!.iconCss === 'e-icons e-audio' ||
        args.item!.iconCss === 'e-icons e-assist-stop'
      ) {
        // Ensure assistViewInstance and its properties are available
        const audioButton = this.assistViewInstance.responseToolbarSettings
          .items?.[1];

        if (audioButton) {
          if (this.currentUtterance) {
            speechSynthesis.cancel();
            this.currentUtterance = null;
            // Reset icon and tooltip to 'Read Aloud'
            audioButton.iconCss = 'e-icons e-audio';
            audioButton.tooltip = 'Read Aloud';
          } else {
            // Create a new speech synthesis utterance with the extracted text
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = () => {
              this.currentUtterance = null;
              // Update icon and tooltip back to 'Read Aloud' when speaking ends
              if (this.assistViewInstance.responseToolbarSettings.items?.[1]) {
                this.assistViewInstance.responseToolbarSettings.items[1]!.iconCss = 'e-icons e-audio';
                this.assistViewInstance.responseToolbarSettings.items[1].tooltip =
                  'Read Aloud';
              }
            };
            // Start speaking the text
            speechSynthesis.speak(utterance);
            this.currentUtterance = utterance;
            // Update icon and tooltip to indicate 'Stop' option
            audioButton.iconCss = 'e-icons e-assist-stop';
            audioButton.tooltip = 'Stop';
          }
        }
      }
    }
  }

  public onPromptRequest(args: PromptRequestEventArgs): void {
    this.stopStreaming = false; // Reset stop streaming flag for new request

    const url =
      azureOpenAIEndpoint.replace(/\/$/, '') +
      `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
      `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': azureOpenAIApiKey, // Use 'api-key' for Azure OpenAI often
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', 
        messages: [{ role: 'user', content: args.prompt }],
        max_tokens: 150,
        stream: false, // Set to false to get a single response back, then stream locally
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((reply) => {
        const responseText =
          reply.choices[0].message.content.trim() ||
          'No response received.';
        if (!this.stopStreaming) { // Only stream if not stopped (e.g., by refresh or explicit stop)
            this.streamResponse(responseText);
        } else {
             // If streaming was stopped, just add the full content
            const htmlResponse = (Marked as any).parse(responseText);
            this.assistViewInstance.addPromptResponse(htmlResponse, true);
        }
      })
      .catch((error) => {
        console.error('Error fetching from Azure OpenAI:', error);
        this.assistViewInstance.addPromptResponse(
          '⚠️ Something went wrong while connecting to Azure OpenAI. ' +
            'Verify endpoint, API key, deployment name, API version, and CORS settings or try again later. '
        );
        this.stopStreaming = true; // Ensure streaming stops on error
      });
  }

  public handleStopResponse(): void {
    this.stopStreaming = true;
    if (this.currentUtterance) {
      speechSynthesis.cancel();
      this.currentUtterance = null;
      const audioButton = this.assistViewInstance.responseToolbarSettings.items?.[1];
      if (audioButton) {
        audioButton.iconCss = 'e-icons e-audio';
        audioButton.tooltip = 'Read Aloud';
      }
    }
  }
}