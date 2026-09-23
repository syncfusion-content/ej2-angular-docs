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

  public speechToTextSettings: SpeechToTextSettingsModel = {
    enable: true
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