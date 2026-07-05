import { Component, ViewChild, TemplateRef } from '@angular/core';
import { AIAssistViewAllModule, AIAssistViewComponent, AIAssistView, AssistThinking } from '@syncfusion/ej2-angular-interactive-chat';

AIAssistView.Inject(AssistThinking);

@Component({
  imports: [AIAssistViewAllModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
      <br />
      <ejs-aiassistview
        id="aiAssistView"
        #assistInstance
        [prompts]="prompts"
        [itemTemplate]="itemTemplate"
        (promptRequest)="onPromptRequest()">
      </ejs-aiassistview>
    </div>
  `
})
export class AppComponent {
  @ViewChild('assistInstance')
  public assistInstance!: AIAssistViewComponent;

  // Define as a class property (function) — same rule as Vue's data property
  public itemTemplate = (data: any) => {
    const item = data.item || data;
    const statusClass = item.isStageInProgress ? 'e-stage-inprogress' : 'e-stage-done';
    const iconCss = item.iconCss || item.dotCss || '';
    return `
      <div class="custom-stage-item ${statusClass}">
        <span class="e-icons ${iconCss}"></span>
        <div class="custom-stage-content">${item.content || ''}</div>
      </div>
    `;
  };

  public prompts: any[] = [
    {
      prompt: 'Explain the water cycle.',
      response: 'The water cycle describes how water moves continuously through the environment via evaporation, condensation, and precipitation.',
      blocks: [
        {
          blockType: 'thinking',
          title: 'Understanding your request',
          collapsed: true,
          collapsible: true,
          isActive: false,
          stages: [
            { id: 'step1', status: 'completed', iconCss: 'e-icons e-check', content: 'Identified request as a water cycle explanation.' }
          ]
        },
        {
          blockType: 'thinking',
          title: 'Summarizing key stages',
          collapsed: true,
          collapsible: true,
          isActive: false,
          stages: [
            { id: 'step2', status: 'completed', iconCss: 'e-icons e-check', content: 'Summarized key stages concisely.' }
          ]
        },
        {
          blockType: 'thinking',
          title: 'Composing response',
          collapsed: true,
          collapsible: true,
          isActive: false,
          stages: [
            { id: 'step3', status: 'completed', iconCss: 'e-icons e-check', content: 'Composed a clear single-paragraph response.' }
          ]
        }
      ]
    }
  ];

  public onPromptRequest(): void {
    setTimeout(() => {
      this.assistInstance.addPromptResponse({
        response: 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
      });
    }, 1000);
  }
}