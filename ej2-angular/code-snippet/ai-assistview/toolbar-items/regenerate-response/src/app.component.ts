import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, ResponseToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs, PromptModel } from '@syncfusion/ej2-interactive-chat';

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)" [responseToolbarSettings]="responseToolbarSettings" [prompts]="promptsData"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    private regenerateResponses: string[] = [
        "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines programmed to think and learn like humans.",
        "Artificial Intelligence is the development of computer systems capable of performing tasks that typically require human intelligence.",
        "AI is a branch of computer science focused on building machines that can perform tasks requiring human-like intelligence."
    ];

    public promptsData: PromptModel[] = [
        {
          prompt: "What is AI?",
          response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making."
        }
    ];

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            const isRegenerate: boolean = this.promptsData.some((p: PromptModel) => p.prompt === args.prompt);
            const response: string = isRegenerate
                ? this.regenerateResponses[Math.floor(Math.random() * this.regenerateResponses.length)]
                : 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.';
            this.aiAssistViewComponent.addPromptResponse(response);
        }, 1000);
    };

    public responseToolbarSettings: ResponseToolbarSettingsModel = {
        items: [
          { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
          { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
          { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
          { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
        ]
    };

}
