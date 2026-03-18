import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import { ToolbarItemClickedEventArgs, PromptRequestEventArgs, SpeechToTextSettingsModel } from '@syncfusion/ej2-interactive-chat';

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <div id="recordingStatus" class="status-indicator ready">Ready to record</div>
      <div id="transcriptDisplay" class="transcript-display">Waiting for speech input...</div>
      <div id="errorMessage" class="error-message" style="display: none;">
        <span class="error-text">Error occurred</span>
      </div>
      <ejs-aiassistview
        #aiAssistView
        [toolbarSettings]="toolbarSettings"
        [speechToTextSettings]="speechToTextSettings"
        [bannerTemplate]="bannerTemplate"
        (promptRequest)="onPromptRequest($event)"
        (toolbarItemClicked)="onToolbarItemClicked($event)"
      >
        <ng-template #bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-listen-icon"></div>
            <i>Click the below mic-button to convert your voice to text.</i>
          </div>
        </ng-template>
      </ejs-aiassistview>
    </div>
  `
})
export class AppComponent {
  @ViewChild('aiAssistView') aiAssistView!: AIAssistViewComponent;

  private lastTranscript = '';

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this)
  };

  public speechToTextSettings: SpeechToTextSettingsModel = {
    enable: true,
    onStart: this.onSpeechStart.bind(this),
    onStop: this.onSpeechStop.bind(this),
    transcriptChanged: this.onTranscriptChanged.bind(this),
    onError: this.onSpeechError.bind(this)
  };

  public onSpeechStart(): void {
    const recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
      recordingIndicator.textContent = 'Recording...';
      recordingIndicator.className = 'status-indicator recording';
    }
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
      errorMessage.style.display = 'none';
    }
  }

  public onSpeechStop(): void {
    const recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
      recordingIndicator.textContent = 'Ready to record';
      recordingIndicator.className = 'status-indicator ready';
    }

    const transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay && this.lastTranscript) {
      transcriptDisplay.textContent = this.lastTranscript;
      transcriptDisplay.style.fontStyle = 'normal';
    }

    setTimeout(() => {
      this.lastTranscript = '';
      if (transcriptDisplay) {
        transcriptDisplay.textContent = 'Waiting for speech input...';
      }
    }, 2000);
  }

  public onTranscriptChanged(args: any): void {
    const currentTranscript = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
    const isFinal = args.isFinal || args.final || (args.result && args.result.isFinal) || false;

    if (currentTranscript) {
      this.lastTranscript = currentTranscript;
    }

    const transcriptDisplay = document.getElementById('transcriptDisplay');
    if (transcriptDisplay) {
      transcriptDisplay.textContent = currentTranscript;
      transcriptDisplay.style.fontStyle = isFinal ? 'normal' : 'italic';
    }
  }

  public onSpeechError(args: any): void {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
      const errorText = errorMessage.querySelector('.error-text');
      if (errorText) {
        errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
      }
      errorMessage.style.display = 'block';
    }
    const recordingIndicator = document.getElementById('recordingStatus');
    if (recordingIndicator) {
      recordingIndicator.textContent = 'Ready to record';
      recordingIndicator.className = 'status-indicator ready';
    }
  }

  public onToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    if (args.item!.iconCss === 'e-icons e-refresh') {
      this.aiAssistView.prompts = [];
    }
  }

  public onPromptRequest(args: PromptRequestEventArgs): void {
    if (!args.prompt!.trim() || !this.aiAssistView) return;

    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    this.aiAssistView.addPromptResponse(defaultResponse, true);
  }
}
