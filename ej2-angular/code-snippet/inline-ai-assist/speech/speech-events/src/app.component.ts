import { Component, ViewChild } from '@angular/core';
import {
  InlineAIAssistModule,
  InlineAIAssistComponent,
  InlinePromptRequestEventArgs,
  ResponseSettingsModel,
  ResponseItemSelectEventArgs,
  SpeechToTextSettingsModel
} from '@syncfusion/ej2-angular-interactive-chat';

@Component({
  standalone: true,
  imports: [InlineAIAssistModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('inlineAssistComponent')
  public inlineAssistComponent!: InlineAIAssistComponent;

  private lastTranscript = '';

  public speechToTextSettings: SpeechToTextSettingsModel = {
    enable: true,
    onStart: this.onSpeechStart.bind(this),
    onStop: this.onSpeechStop.bind(this),
    transcriptChanged: this.onTranscriptChanged.bind(this),
    onError: this.onSpeechError.bind(this)
  };

  public itemSelect = (args: ResponseItemSelectEventArgs): void => {
    if (args.command.label === 'Accept') {
      const editable = document.getElementById('editableText') as HTMLElement | null;
      if (editable) {
        editable.innerHTML = '<p>' + this.inlineAssistComponent.prompts[this.inlineAssistComponent.prompts.length - 1].response + '</p>';
      }
      this.inlineAssistComponent.hidePopup();
    } else if (args.command.label === 'Discard') {
      this.inlineAssistComponent.hidePopup();
    }
  };

  public responseSetting: ResponseSettingsModel = {
    itemSelect: this.itemSelect
  };

  public onClick(): void {
    this.inlineAssistComponent.showPopup();
  }

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

  public onPromptRequest = (args: InlinePromptRequestEventArgs): void => {
    if (!args.prompt?.trim()) {
      return;
    }

    setTimeout(() => {
      const defaultResponse =
        'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

      this.inlineAssistComponent.addResponse(defaultResponse);
    }, 1000);
  };
}