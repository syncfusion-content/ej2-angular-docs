import { InlineAIAssistModule, InlineAIAssistComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { InlinePromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';

@Component({
        imports: [ InlineAIAssistModule ],
        standalone: true,
        selector: 'app-root',
        // specifies the template string for the Inline AI Assist component
        template: `
            <select id="responseMode" (change)="onModeChange($event)">
                <option value="Popup">Popup</option>
                <option value="Inline">Inline</option>
            </select>

            <input id="messageInput" placeholder="Type a message..." />

            <div ejs-inlineaiassist #inlineAssistComponent
                 [target]="'#messageInput'"
                 responseMode="Popup"
                 popupWidth="500px"
                 (promptRequest)="onPromptRequest($event)">
            </div>
        `
})

export class AppComponent implements AfterViewInit {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    ngAfterViewInit(): void {
        this.inlineAssistComponent.showPopup();
    }

    public onModeChange(event: Event): void {
        const select = event.target as HTMLSelectElement;
        const mode = select.value;
        if (this.inlineAssistComponent) {
            this.inlineAssistComponent.responseMode = mode;
            this.inlineAssistComponent.showPopup();
        }
    }

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
