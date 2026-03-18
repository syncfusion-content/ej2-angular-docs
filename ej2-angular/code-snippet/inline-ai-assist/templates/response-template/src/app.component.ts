import { ViewChild, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [CommonModule, InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    // Pre-loaded prompts data
    public promptsData = [
        {
            prompt: "What is AI?",
            response: `<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>`
        }
    ];

    public itemSelect = (args: ResponseItemSelectEventArgs) => {
        if (args.command.label === 'Accept') {
            const editable = document.getElementById('editableText') as HTMLElement | null;
            if (editable) {
                editable.innerHTML = '<p>' + this.inlineAssistComponent.prompts[this.inlineAssistComponent.prompts.length - 1 ].response + '</p>';
            }
            this.inlineAssistComponent.hidePopup();
        } else if (args.command.label === 'Discard') {
            this.inlineAssistComponent.hidePopup();
        }
    }

    public responseSetting: ResponseSettingsModel = {
        itemSelect:  this.itemSelect
    }
    
    onClick(): void {
        this.inlineAssistComponent.showPopup();
    }

    // Response template function - returns custom HTML for response items
    public responseItemContent(ctx: any) {
        return `<div class="responseItemContent">
                <div class="response-header">
                    <span class="e-icons e-assistview-icon"></span>
                    Inline AI Assist
                </div>
                <div class="responseContent">${ctx.response}</div>
            </div>`;
    }

    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
        // Check if the prompt matches predefined prompts
        let foundPrompt = this.promptsData.find((promptObj: any) => promptObj.prompt === args.prompt);
        let defaultResponse = 'For real-time prompt processing, connect to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        this.inlineAssistComponent.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    };
}
