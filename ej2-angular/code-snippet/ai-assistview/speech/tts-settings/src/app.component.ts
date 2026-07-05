import { Component, ViewChild } from '@angular/core';
import {
  AIAssistViewModule,
  AIAssistViewComponent,
  ToolbarSettingsModel,
  ToolbarItemClickedEventArgs,
  PromptRequestEventArgs,
  ResponseToolbarSettingsModel,
  TextToSpeechSettingsModel
} from '@syncfusion/ej2-angular-interactive-chat';

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
    <div class="integration-texttospeech-settings">
      <ejs-aiassistview
        #assistView
        [prompts]="promptsData"
        [responseToolbarSettings]="responseToolbarSettings"
        [toolbarSettings]="toolbarSettings"
        [textToSpeechSettings]="textToSpeechSettings"
        [bannerTemplate]="bannerTemplate"
        (promptRequest)="onPromptRequest($event)"
        (toolbarItemClicked)="onToolbarItemClicked($event)"
      >
        <ng-template #bannerTemplate>
          <div class="banner-content">
            <div class="e-icons e-assist-audio"></div>
            <i>Speech settings configured</i>
          </div>
        </ng-template>
      </ejs-aiassistview>
    </div>
  `
})
export class AppComponent {
  @ViewChild('assistView') assistViewInstance!: AIAssistViewComponent;

  // Sample prompt data with predefined response
  public promptsData = [
    {
      prompt: 'What is AI?',
      response: 'AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.'
    }
  ];

  // Configure the built-in Text-to-Speech settings
  public textToSpeechSettings: TextToSpeechSettingsModel = {
    language: 'en-US',
    speechPitch: 1,
    speechRate: 1,
    volume: 1
  };

  public responseToolbarSettings: ResponseToolbarSettingsModel = {
    items: [
      { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
      { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
      { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' }
    ]
  };

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this)
  };

  public onToolbarItemClicked(args: ToolbarItemClickedEventArgs): void {
    if (args.item!.iconCss === 'e-icons e-refresh') {
      this.assistViewInstance.prompts = [];
    }
  }

  public onPromptRequest(args: PromptRequestEventArgs): void {
    setTimeout(() => {
      const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
      this.assistViewInstance.addPromptResponse(defaultResponse);
    }, 1000);
  }
}
