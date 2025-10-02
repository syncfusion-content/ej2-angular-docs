import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SpeechToTextModule, SpeechToTextComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs'
import { AIAssistViewModule, AIAssistViewComponent, ToolbarSettingsModel, ToolbarItemClickedEventArgs, PromptRequestEventArgs, PromptToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import * as Marked from 'marked';
import OpenAI from 'openai';

@Component({
  standalone: true,
  imports: [AIAssistViewModule, SpeechToTextModule],
  selector: 'app-root',
  template: `
      <div class="integration-speechToText-section">
        <div ejs-aiassistview #assistView (created)="setupFooterButtons()" (promptRequest)="onPromptRequest($event)" [toolbarSettings]="toolbarSettings" [promptToolbarSettings]="promptToolbarSettings" (stopRespondingClick)="stopRespondingClick()">
        <ng-template #bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-listen-icon"></div>
            <i>Click the below mic-button to convert your voice to text.</i>
          </div>
        </ng-template>
          <ng-template #footerTemplate>
            <div class="e-footer-wrapper">
              <div id="assistview-footer" class="content-editor" contenteditable="true" placeholder="Click to speak or start typing..."></div>
              <div class="option-container">
                <button ejs-speechtotext #speechToText id="speechToText" cssClass="e-flat" (transcriptChanged)="onTranscriptChange($event)" (onStop)="toggleButtons()" (onError)="onErrorHandler($event)"></button>
                <button id="assistview-sendButton" class="e-assist-send e-icons" role="button"></button>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
      `
});
export class AppComponent {
  @ViewChild('assistView') assistViewInstance!: AIAssistViewComponent;
  @ViewChild('speechToText') speechToTextInstance!: SpeechToTextComponent;

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this),
  };
  private openaiApiKey: string = ''; // Replace with your OpenAI API key
  private openai: OpenAI;
  private stopStreaming: boolean = false;

  constructor() {
    this.openai = new OpenAI({
      apiKey: this.openaiApiKey,
      dangerouslyAllowBrowser: true // Required for browser usage, use with caution
    });
  }
  
  ngAfterViewInit(): void {
    this.setupFooterButtons();
  }

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
    this.toggleButtons();
  };

  public setupFooterButtons(): void {
    if (this.assistViewInstance) {
      const assistviewElement = this.assistViewInstance.element as HTMLElement;
      const assistviewFooter = assistviewElement.querySelector('#assistview-footer') as HTMLElement;
      const sendButton = assistviewElement.querySelector('#assistview-sendButton') as HTMLElement;

      sendButton?.addEventListener('click', () => this.sendIconClicked());
      assistviewFooter?.addEventListener('input', () => this.toggleButtons());
      assistviewFooter?.addEventListener('keydown', (e) => this.onKeyDown(e));

      this.toggleButtons();
    }
  }

  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.sendIconClicked();
      event.preventDefault(); // Prevent the default behavior of the Enter key
    }
  }

  public onTranscriptChange(args: TranscriptChangedEventArgs): void {
    const assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
    if (assistviewFooter) {
      assistviewFooter.innerText = args.transcript;
    }
  }

  public onToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    if (args.item.iconCss === 'e-icons e-refresh') {
      this.assistViewInstance.prompts = [];
    }
  }

  public toggleButtons(): void {
    const assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
    const sendButton = document.querySelector('#assistview-sendButton') as HTMLElement;
    const speechButton = document.querySelector('#speechToText') as HTMLElement;

    const hasText = assistviewFooter?.innerText.trim() !== '';
    sendButton?.classList.toggle('visible', hasText);
    speechButton?.classList.toggle('visible', !hasText);

    if (!hasText && (assistviewFooter?.innerHTML.trim() === '' || assistviewFooter?.innerHTML === '<br>')) {
      assistviewFooter.innerHTML = '';
    }
  }

  public sendIconClicked(): void {
    const assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
    this.assistViewInstance.executePrompt(assistviewFooter.innerText);
    assistviewFooter.innerText = '';
  }

  public promptToolbarSettings: PromptToolbarSettingsModel = {    
    itemClicked: (args: ToolbarItemClickedEventArgs) => {
      if (args.item.iconCss === "e-icons e-assist-edit") {
        const assistviewFooter = document.querySelector('#assistview-footer') as HTMLElement;
        assistviewFooter.innerHTML = this.assistViewInstance.prompts[args.dataIndex].prompt;
        this.toggleButtons();
      }
    }
  };

  public onPromptRequest(args: PromptRequestEventArgs): void {
    this.stopStreaming = false;
    this.openai.chat.completions.create({
      model: 'gpt-4o-mini', // Updated to match your original model
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
      this.toggleButtons();
    });
  }

  public stopRespondingClick = () => {
    this.stopStreaming = true;
    this.toggleButtons();
  };
}