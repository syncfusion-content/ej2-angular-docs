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
    <div ejs-aiassistview id="footer-template" #aiAssistViewComponent>
        <ng-template #footerTemplate>
            <div class="custom-footer">
                <textarea id="promptTextArea" class="e-input" rows="2" placeholder="Enter your prompt here"></textarea>
                <button id="sendPrompt" class="e-btn e-primary" (click)="buttonClick()">Generate</button>
            </div>
        </ng-template>
    </div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public buttonClick = () => {
        const textArea = document.getElementById('promptTextArea') as HTMLTextAreaElement;
        if (textArea) {
          textArea.value = '';
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }
    };

}
