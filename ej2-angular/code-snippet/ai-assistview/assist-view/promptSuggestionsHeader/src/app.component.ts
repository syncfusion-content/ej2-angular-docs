import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent [promptSuggestions]="promptSuggestions" [promptSuggestionsHeader]="promptSuggestionsHeader" (promptRequest)="onPromptRequest($event)"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public promptSuggestionsHeader: string = 'Suggested Prompts';

    public promptSuggestions: string[] = [
        "Best practices for clean, maintainable code?",
        "How to optimize code editor for speed?"
    ];

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
          let response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
          let response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(args.prompt === this.aiAssistViewComponent.promptSuggestions[0] ? response1 : args.prompt === this.aiAssistViewComponent.promptSuggestions[1] ? response2 : defaultResponse);
        }, 1000);
      };
}
