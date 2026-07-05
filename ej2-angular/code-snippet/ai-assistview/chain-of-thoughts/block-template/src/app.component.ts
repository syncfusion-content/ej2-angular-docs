import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIAssistViewAllModule, AIAssistViewComponent, PromptRequestEventArgs, AssistThinking, AIAssistView } from '@syncfusion/ej2-angular-interactive-chat';

AIAssistView.Inject(AssistThinking);

@Component({
    imports: [ AIAssistViewAllModule, CommonModule ],
    standalone: true,
    selector: 'app-root',
    template: `
      <div id="container" style="height: 600px; width: 100%;">
        <br />
        <ejs-aiassistview
          id="aiAssistView"
          #assistInstance
          [prompts]="prompts"
          [blockTemplate]="blockTemplate"
          (promptRequest)="onPromptRequest($event)">
        </ejs-aiassistview>
      </div>

      <!-- Block Template - Only for thinking blocks -->
      <ng-template #blockTemplate let-data>
        <ng-container *ngIf="data.block.blockType === 'thinking'; else defaultBlock">
          <div class="custom-thinking-block">
            <div class="custom-thinking-title">
              <span class="e-icons" [ngClass]="data.block.isActive ? 'e-spinner' : 'e-check'"></span>
              <strong>{{ data.block.title || 'Thinking' }}</strong>
            </div>
            <ul class="custom-thinking-stages">
              <li *ngFor="let stage of data.block.stages || []">
                {{ stage.content }}
              </li>
            </ul>
          </div>
        </ng-container>

        <!-- Default rendering for other block types -->
        <ng-template #defaultBlock>
          <div>{{ data.block.title }}</div>
        </ng-template>
      </ng-template>
    `
})
export class AppComponent {
  @ViewChild('assistInstance')
  public assistInstance: AIAssistViewComponent;

  @ViewChild('blockTemplate')
  public blockTemplate: any;

  public prompts: any[] = [
    {
      prompt: 'What is the capital of France?',
      response: 'The capital of France is Paris.',
      blocks: [
        {
          blockType: 'thinking',
          title: 'Fact lookup',
          isActive: false,
          collapsed: false,
          collapsible: false,
          stages: [
            {
              id: 'step1',
              status: 'completed',
              content: 'Checked knowledge base for European capitals.'
            }
          ]
        }
      ]
    }
  ];

  public onPromptRequest = (args: PromptRequestEventArgs) => {
    setTimeout(() => {
      const defaultResponse = 
        'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
      this.assistInstance.addPromptResponse({
        blocks: [],
        response: defaultResponse
      }, true);
    }, 1000);
  };
}