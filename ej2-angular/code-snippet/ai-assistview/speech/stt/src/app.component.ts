import { Component, ViewChild, ElementRef, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { SpeechToTextModule, SpeechToTextComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
import { AIAssistViewModule, AIAssistViewComponent, ToolbarSettingsModel, ToolbarItemClickedEventArgs, PromptRequestEventArgs, PromptToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import * as Marked from 'marked';
import { AzureOpenAI } from 'openai';

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

const client = new AzureOpenAI({
  apiKey: azureOpenAIApiKey,
  endpoint: azureOpenAIEndpoint,
  apiVersion: azureOpenAIApiVersion,
  dangerouslyAllowBrowser: true
});

@Component({
  standalone: true,
  imports: [AIAssistViewModule, SpeechToTextModule],
  selector: 'app-root',
  template: `
      <div class="integration-speechtotext-section">
        <div
          ejs-aiassistview
          #assistView
          (promptRequest)="onPromptRequest($event)"
          [toolbarSettings]="toolbarSettings"
          [promptToolbarSettings]="promptToolbarSettings"
          (stopRespondingClick)="stopRespondingClick()"
        >
          <ng-template #bannerTemplate>
            <div class="banner-content">
              <div class="e-icons e-listen-icon"></div>
              <i>Click the below mic-button to convert your voice to text.</i>
            </div>
          </ng-template>

          <ng-template #footerTemplate>
            <div class="e-footer-wrapper">
              <div
                #contentEditor
                id="assistview-footer"
                class="content-editor"
                contenteditable="true"
                placeholder="Click to speak or start typing..."
                (input)="onContentChanged()"
                (keydown.enter)="onEditorKeyDown($event)"
              ></div>

              <div class="option-container">
                <button
                  ejs-speechtotext
                  #speechToText
                  id="speechToText"
                  cssClass="e-flat"
                  (onStart)="onListeningStart()"
                  (onStop)="onListeningStop()"
                  (transcriptChanged)="onTranscriptChange($event)"
                  (onError)="onErrorHandler($event)"
                  [class.visible]="!hasTextInEditor || isListening"
                ></button>

                <button
                  id="assistview-sendButton"
                  class="e-assist-send e-icons"
                  role="button"
                  (click)="sendIconClicked()"
                  [class.visible]="hasTextInEditor && !isListening"
                ></button>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
      `
  });
export class AppComponent implements AfterViewInit {
  @ViewChild('assistView') assistViewInstance!: AIAssistViewComponent;
  @ViewChild('speechToText') speechToTextInstance!: SpeechToTextComponent;
  @ViewChild('contentEditor') contentEditor!: ElementRef<HTMLDivElement>;

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

  public hasTextInEditor = false;
  public isListening = false;

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this),
  };

  public promptToolbarSettings: PromptToolbarSettingsModel = {
    itemClicked: (args: ToolbarItemClickedEventArgs) => {
      if (args.item.iconCss === 'e-icons e-assist-edit') {
        const editor = this.contentEditor?.nativeElement;
        if (editor) {
          editor.innerHTML = this.assistViewInstance.prompts[args.dataIndex].prompt;
          this.onContentChanged();
          this.blurMicButton();
        }
      }
    }
  };

  private stopStreaming = false;

  ngAfterViewInit(): void {
    this.onContentChanged(); // Initialize button visibility
  }

  public async streamResponse(response: string) {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i++];
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = Marked.parse(lastResponse);
        this.assistViewInstance.addPromptResponse(htmlResponse, i === responseLength);
        this.assistViewInstance.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15));
    }
    this.onContentChanged();
  }

  public async onPromptRequest(args: PromptRequestEventArgs): Promise<void> {
    if (!args?.prompt?.trim() || !this.assistViewInstance) return;

    this.stopStreaming = false;

    try {
      const completion = await client.chat.completions.create({
        model: azureDeploymentName,
        messages: [{ role: 'user', content: args.prompt }],
        temperature: 0.7
      });
      const responseText = completion?.choices?.[0]?.message?.content?.trim() || 'No response received.';
      await this.streamResponse(responseText);
    } catch (error) {
      console.error('Azure OpenAI request failed:', error);
      this.assistViewInstance.addPromptResponse(
        '⚠️ Something went wrong while connecting to Azure OpenAI. Verify endpoint, API key, deployment name, API version, and CORS settings.',
        true
      );
      this.stopStreaming = true;
    }
  }

  public onContentChanged(): void {
    const editor = this.contentEditor?.nativeElement;
    if (!editor) return;
    // Treat only real text as content. Ignore non-breaking spaces or stray HTML
    const text = (editor.textContent || '').replace(/\u00A0/g, ' ').trim();
    this.hasTextInEditor = text.length > 0;
    if (!this.hasTextInEditor && (editor.innerHTML.trim() === '' || editor.innerHTML === ' ')) {
      editor.innerHTML = '';
    }
  }

  public onEditorKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      this.sendIconClicked();
    }
  }

  public onTranscriptChange(args: TranscriptChangedEventArgs): void {
    const editor = this.contentEditor?.nativeElement;
    if (!editor) return;
    editor.innerText = args.transcript || '';
    this.onContentChanged();
  }

  public onListeningStart(): void {
    // Ensure state update is inside Angular zone
    this.zone.run(() => {
      this.isListening = true;
      this.cdr.detectChanges();
    });
  }

  public onListeningStop(): void {
    this.zone.run(() => {
      this.isListening = false;
      this.onContentChanged();
      this.cdr.detectChanges();
    });
  }

  public onToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    if (args.item.iconCss === 'e-icons e-refresh') {
      this.assistViewInstance.prompts = [];
      const editor = this.contentEditor?.nativeElement;
      if (editor) {
        editor.innerText = '';
      }
      this.stopListeningIfNeeded();
      this.onContentChanged();
    }
  }

  public sendIconClicked(): void {
    const editor = this.contentEditor.nativeElement;
    const promptText = editor.innerText;
    if (promptText.trim()) {
      // Ensure listening is stopped before sending
      this.stopListeningIfNeeded();
      this.assistViewInstance.executePrompt(promptText);
      editor.innerText = '';
      this.onContentChanged();
      this.blurMicButton();
      this.cdr.detectChanges();
    }
  }

  public stopRespondingClick(): void {
    this.stopStreaming = true;
    this.stopListeningIfNeeded();
    this.onContentChanged();
  }

  public onErrorHandler(error: any): void {
    console.error('Speech-to-text error:', error);
    // Ensure UI is consistent even after error
    this.isListening = false;
    this.onContentChanged();
  }

  private stopListeningIfNeeded(): void {
    if (this.isListening) {
      this.speechToTextInstance?.stopListening?.();
      // Make sure UI reflects the stop immediately
      this.zone.run(() => {
        this.isListening = false;
        this.cdr.detectChanges();
      });
    }
  }

  private blurMicButton(): void {
    // Prevent accidental re-triggering of mic due to focus/keyboard
    (this.speechToTextInstance as any)?.element?.blur?.();
  }
}