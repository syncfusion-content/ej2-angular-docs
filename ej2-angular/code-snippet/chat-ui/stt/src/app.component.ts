import { Component, ViewChild, ElementRef, NgZone, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SpeechToTextModule, SpeechToTextComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
import { ChatUIModule, ChatUIComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel } from '@syncfusion/ej2-interactive-chat';

@Component({
  standalone: true,
  imports: [ChatUIModule, SpeechToTextModule],
  selector: 'app-root',
  template: `
      <div class="integration-speechtotext">
        <div #chatUIComponent ejs-chatui [user]="currentUserModel">
          <e-messages>
              <e-message text="Hi Michale, are we on track for the deadline?" [author]="currentUserModel"></e-message>
              <e-message text="Yes, the design phase is complete." [author]="michaleUserModel"></e-message>
              <e-message text="I’ll review it and send feedback by today." [author]="currentUserModel"></e-message>
          </e-messages>
          <ng-template #footerTemplate>
          <div class="e-footer-wrapper">
            <div
              #contentEditor
              id="chatui-footer"
              class="content-editor"
              contenteditable="true"
              placeholder="Click to speak or start typing..."
              (input)="onContentChanged()"
              (keydown)="onEditorKeyDown($event)"
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
                [class.visible]="!hasTextInEditor || isListening"
              ></button>

              <button
                id="chatui-sendButton"
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
  })
export class AppComponent implements AfterViewInit {
    @ViewChild('chatUIComponent') chatUIComponent!: ChatUIComponent;
    @ViewChild('speechToText') speechToTextInstance!: SpeechToTextComponent;
    @ViewChild('contentEditor') contentEditor!: ElementRef<HTMLDivElement>;

    constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {}

    public hasTextInEditor = false;
    public isListening = false;

    ngAfterViewInit(): void {
      this.onContentChanged(); // Initialize button visibility
    }

    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };

    public onContentChanged(): void {
      const editor = this.contentEditor?.nativeElement;
      if (!editor) return;
      // Get the text content, removing non-breaking spaces and trimming
      const text = (editor.textContent || '').replace(/\u00A0/g, ' ').trim();
      this.hasTextInEditor = text.length > 0;
      // If no meaningful text, clear the innerHTML to ensure the div is truly empty
      if (!this.hasTextInEditor) {
        editor.innerHTML = '';
      }
      this.cdr.detectChanges();
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

    public sendIconClicked(): void {
      const editor = this.contentEditor.nativeElement;
      const messageContent = editor.innerText;
      if (messageContent.trim()) {
        this.chatUIComponent.addMessage({
          author: this.currentUserModel,
          text: messageContent
        });
        editor.innerText = '';
        this.onContentChanged();
        this.cdr.detectChanges();
      }
    }
}