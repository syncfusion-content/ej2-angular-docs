import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';
import { PromptModel, AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest()" [prompts]="promptsData"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public promptsData: PromptModel[] = [
        {
            prompt: "Can you help me create a summary of the latest trends in AI technology?",
            response: `<div>Sure! Here are the latest trends in AI technology:
                        <ul>
                            <li><strong>Generative AI:</strong> Improved models like GPT-4 enhance natural language processing.</li>
                            <li><strong>AI in Healthcare:</strong> AI aids in diagnostics and personalized treatments.</li>
                            <li><strong>Autonomous Systems:</strong> Self-driving cars and drones are advancing.</li>
                            <li><strong>AI Ethics:</strong> Focus on bias, privacy, and accountability in AI.</li>
                            <li><strong>Edge AI:</strong> Processing moves to local devices, boosting IoT.</li>
                        </ul>
                    </div>`
        }
    ];

    public onPromptRequest = () => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

}
