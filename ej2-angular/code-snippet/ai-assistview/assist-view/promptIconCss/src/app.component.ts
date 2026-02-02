import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';


@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent [prompts]="promptsData" [promptIconCss]="promptIconCss" (promptRequest)="onPromptRequest($event)"></div>`
})

export class AppComponent {
  @ViewChild('aiAssistViewComponent')
  public aiAssistViewComponent!: AIAssistViewComponent;

  public promptIconCss: string = 'e-icons e-user';

  public promptsData = [
    {
      prompt: "What is AI?",
      response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
    }
  ];

  public onPromptRequest = (args: PromptRequestEventArgs) => {
    setTimeout(() => {
      let foundPrompt = this.promptsData.find((promptObj: any) => promptObj.prompt === args.prompt);
      let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
      this.aiAssistViewComponent.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
    }, 1000);
  };
}
