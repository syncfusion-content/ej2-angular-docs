import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent, ToolbarSettingsModel, ToolbarItemClickedEventArgs, PromptRequestEventArgs, ResponseToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import * as Marked from 'marked';
import OpenAI from 'openai';

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
      <div class="integration-textToSpeech-section">
        <div
          ejs-aiassistview
          #assistView
          (promptRequest)="onPromptRequest($event)"
          [responseToolbarSettings]="responseToolbarSettings"
          [toolbarSettings]="toolbarSettings">
          <ng-template #bannerTemplate>
            <div class="banner-content">
              <div class="e-icons e-audio"></div>
              <i>Ready to assist voice enabled !</i>
            </div>
          </ng-template>
        </div>
      </div>
  `
});
export class AppComponent {
  @ViewChild('assistView') assistViewInstance!: AIAssistViewComponent;

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this),
  };

  private openaiApiKey: string = ''; // Replace with your OpenAI API key
  private openai: OpenAI;
  private stopStreaming: boolean = false;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    this.openai = new OpenAI({
      apiKey: this.openaiApiKey,
      dangerouslyAllowBrowser: true // Required for browser usage, use with caution
    });
  }

  public responseToolbarSettings: ResponseToolbarSettingsModel = {
    items: [
      { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
      { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
      { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
      { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
    ],
    itemClicked: this.onResponseToolbarItemClicked.bind(this)
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
        const htmlResponse = Marked.parse(lastResponse);
        this.assistViewInstance.addPromptResponse(htmlResponse, i === responseLength);
        this.assistViewInstance.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
    }
  };

  public onToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    if (args.item.iconCss === 'e-icons e-refresh') {
      this.assistViewInstance.prompts = [];
    }
  }

  public onResponseToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    const responseHtml = this.assistViewInstance.prompts[args.dataIndex].response;
    if (responseHtml) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = responseHtml;
      const text = (tempDiv.textContent || tempDiv.innerText || '').trim();
      if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
        if (this.currentUtterance) {
          speechSynthesis.cancel();
          this.currentUtterance = null;
          // Reset icon and tooltip to 'Read Aloud'
          this.assistViewInstance.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
          this.assistViewInstance.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
        } else {
          // Create a new speech synthesis utterance with the extracted text
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.onend = () => {
            this.currentUtterance = null;
            this.assistViewInstance.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
            this.assistViewInstance.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
          };
          // Start speaking the text
          speechSynthesis.speak(utterance);
          this.currentUtterance = utterance;
          // Update icon and tooltip to indicate 'Stop' option
          this.assistViewInstance.responseToolbarSettings.items[1].iconCss = 'e-icons e-assist-stop';
          this.assistViewInstance.responseToolbarSettings.items[1].tooltip = 'Stop';
        }
      }
    }
  }

  public onPromptRequest(args: PromptRequestEventArgs): void {
    this.stopStreaming = false;
    this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: args.prompt || 'Hi' }],
      max_tokens: 500,
    })
    .then(reply => {
      const responseText = reply.choices[0].message.content.trim() || 'No response received.';
      this.streamResponse(responseText);
    })
    .catch(error => {
      console.error('Error fetching OpenAI response:', error);
      this.assistViewInstance.addPromptResponse(
        '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
      );
      this.stopStreaming = true;
    });
  }
}