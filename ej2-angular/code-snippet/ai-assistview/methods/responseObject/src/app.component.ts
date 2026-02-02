import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<button id="addObjectResponse" (click)="buttonClick()">Add Object Response</button>
               <div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest()"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onPromptRequest = () => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

    public buttonClick = () => {
        this.aiAssistViewComponent.addPromptResponse({ prompt: 'What is AI?', response: 'AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.' });
    };
}
