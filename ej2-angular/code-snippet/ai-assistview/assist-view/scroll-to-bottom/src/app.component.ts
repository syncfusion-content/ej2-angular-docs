import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptModel, AssistViewModel } from '@syncfusion/ej2-interactive-chat';

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <ejs-aiassistview
        #aiAssistView
        [promptSuggestions]="promptSuggestions"
        [prompts]="prompts"
        [views]="views"
        (promptRequest)="onPromptRequest()"
      ></ejs-aiassistview>
    </div>
  `
})
export class AppComponent {
  @ViewChild('aiAssistView') aiAssistView!: AIAssistViewComponent;

  promptSuggestions: string[] = [
    'What tools or apps can help me prioritize tasks?',
    'How do I manage multiple projects effectively?'
  ];

  prompts: PromptModel[] = [
    {
      prompt: 'What tools or apps can help me prioritize tasks?',
      response: `<div>Here are some effective task prioritization tools:
                    <ul>
                        <li><strong>Todoist:</strong> A robust task manager with priority levels and project organization.</li>
                        <li><strong>Asana:</strong> Project management tool with timeline and board views.</li>
                        <li><strong>Microsoft To Do:</strong> Simple and integrated with Microsoft ecosystem.</li>
                        <li><strong>Notion:</strong> All-in-one workspace for notes, databases, and tasks.</li>
                        <li><strong>ClickUp:</strong> Comprehensive tool with customizable workflows and prioritization features.</li>
                    </ul>
                </div>`
    },
    {
      prompt: 'How do I manage multiple projects effectively?',
      response: `<div>Here are best practices for managing multiple projects:
                    <ul>
                        <li><strong>Use a centralized dashboard:</strong> Track all projects in one place.</li>
                        <li><strong>Set clear milestones:</strong> Break down each project into manageable phases.</li>
                        <li><strong>Prioritize tasks:</strong> Focus on high-impact items first.</li>
                        <li><strong>Delegate effectively:</strong> Assign tasks to team members based on skills.</li>
                        <li><strong>Regular reviews:</strong> Conduct weekly or bi-weekly project status meetings.</li>
                    </ul>
                </div>`
    }
  ];

  views: AssistViewModel[] = [
    {
      name: 'Task Assistant',
      iconCss: 'e-icons e-assistview-icon'
    }
  ];

  onPromptRequest(): void {
    setTimeout(() => {
      const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
      this.aiAssistView.addPromptResponse(defaultResponse);
    }, 1000);
  }
}
