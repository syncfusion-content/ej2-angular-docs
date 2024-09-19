import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview id="prompt-item" #aiAssistViewComponent [prompts]="promptsData" (promptRequest)="onPromptRequest($event)">
        <ng-template #promptItemTemplate let-data>
            <div class="promptItemContent">
                <div class="prompt-header">You
                    <span class="e-icons e-user"></span>
                </div>
                <div class="content">{{cleanPrompt(data.prompt)}}</div>
            </div>
        </ng-template>
    </div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public promptsData  = [
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

    public cleanPrompt(prompt: string): string {
        return prompt.replace('<span class="e-icons e-circle-info"></span>', '');
    };

}
