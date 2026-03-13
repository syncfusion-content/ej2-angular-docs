import { InlineAIAssistModule, InlineAIAssistComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { Component, ViewChild } from '@angular/core';
import { InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';

@Component({
        imports: [ InlineAIAssistModule ],
        standalone: true,
        selector: 'app-root',
        template: `
            <div id="defaultInlineAssist"></div>
            <div ejs-inlineaiassist #inlineAssistComponent
                 [relateTo]="'#defaultInlineAssist'"
                 popupWidth="500px"
                 (promptRequest)="onPromptRequest($event)">
            </div>
        `
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        const prompt = args.prompt;
        setTimeout(() => {
            const sampleResponse = "**You asked:** " + prompt + "\n" +
                "This is a demonstration response from Syncfusion InlineAIAssist.\n" +
                "In your real application, send the prompt to an AI service here.";
            this.inlineAssistComponent.addResponse(sampleResponse, true);
        }, 1000);
    };
}
