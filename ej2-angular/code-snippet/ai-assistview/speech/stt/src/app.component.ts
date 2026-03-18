import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import { ToolbarItemClickedEventArgs, PromptRequestEventArgs, SpeechToTextSettingsModel } from '@syncfusion/ej2-interactive-chat';

@Component({
  standalone: true,
  imports: [AIAssistViewModule],
  selector: 'app-root',
  template: `
    <div id="wrapper">
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

  public toolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: this.onToolbarItemClicked.bind(this)
  };

  public speechToTextSettings: SpeechToTextSettingsModel = {
    enable: true
  };

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
