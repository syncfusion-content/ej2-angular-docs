import { Component, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AIAssistViewAllModule, AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { AIAssistView, AssistThinking } from '@syncfusion/ej2-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
AIAssistView.Inject(AssistThinking);

@Component({
  imports: [AIAssistViewAllModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div id="container" style="height: 350px; width: 650px; margin: 0 auto;">
      <ejs-aiassistview
        id="aiAssistView"
        #assistInstance
        [promptSuggestions]="promptSuggestions"
        (promptRequest)="onPromptRequest($event)">
      </ejs-aiassistview>
    </div>
  `
})
export class AppComponent {
  @ViewChild('assistInstance')
  public assistInstance!: AIAssistViewComponent;

  public promptSuggestions: string[] = [
    'Build a modern dashboard for my business',
    'Create a login page with validation',
    'Make a task management board'
  ];

  public onPromptRequest = (args: PromptRequestEventArgs) => {
    // Step 1
    setTimeout(() => {
      this.assistInstance.addPromptResponse({
        blocks: [
          {
            blockType: 'thinking',
            title: 'Understanding your request',
            collapsible: true,
            collapsed: false,
            isActive: true,
            stages: [
              {
                id: 'step1',
                status: 'inprogress',
                content: 'Identified request as a business dashboard requirement.'
              }
            ]
          }
        ]
      }, false);

      // Step 2
      setTimeout(() => {
        this.assistInstance.addPromptResponse({
          blocks: [
            {
              blockType: 'thinking',
              title: 'Understanding your request',
              collapsible: true,
              collapsed: true,
              isActive: false,
              stages: [
                {
                  id: 'step1',
                  status: 'completed',
                  content: 'Identified request as a business dashboard requirement.'
                }
              ]
            },
            {
              blockType: 'thinking',
              title: 'Selecting UI components',
              collapsible: true,
              collapsed: false,
              isActive: true,
              stages: [
                {
                  id: 'step2',
                  status: 'inprogress',
                  content: 'Selecting the best UI components for the dashboard.'
                }
              ]
            }
          ]
        }, false);

        // Step 3 — final response
        setTimeout(() => {
          this.assistInstance.addPromptResponse({
            blocks: [
              {
                blockType: 'thinking',
                title: 'Understanding your request',
                collapsible: true,
                collapsed: true,
                isActive: false,
                stages: [
                  {
                    id: 'step1',
                    status: 'completed',
                    content: 'Identified request as a business dashboard requirement.'
                  }
                ]
              },
              {
                blockType: 'thinking',
                title: 'Selecting UI components',
                collapsible: true,
                collapsed: true,
                isActive: false,
                stages: [
                  {
                    id: 'step2',
                    status: 'completed',
                    content: 'Selecting the best UI components for the dashboard.'
                  }
                ]
              },
              {
                blockType: 'thinking',
                title: 'Finalizing output',
                collapsible: true,
                collapsed: true,
                isActive: false,
                stages: [
                  {
                    id: 'step3',
                    status: 'completed',
                    iconCss: 'e-icons e-check',
                    content: 'Generated final dashboard structure successfully.'
                  }
                ]
              }
            ],
            response: '## Business Dashboard Structure\n\n**Generated successfully.**\n\n### Features Included:\n- Key performance indicator cards\n- Revenue and sales charts\n- Recent activity data grid\n- Responsive layout for all devices\n- Clean navigation structure\n\n### Recommended Syncfusion Components:\n- Chart\n- Grid\n- Card\n- Sidebar\n- DropDownList'
          }, true);
        }, 1000);
      }, 1000);
    }, 1000);
  };
}
