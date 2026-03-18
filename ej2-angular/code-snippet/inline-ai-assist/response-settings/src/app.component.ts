import { ViewChild, Component } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;
    
    public responseMode: string = 'Popup';

    public onItemSelect = (args: ResponseItemSelectEventArgs) => {
        // Handle different response items
        if (args.command.label === 'Accept') {
            const editable = document.getElementById('editableText') as HTMLElement | null;
            if (editable && this.inlineAssistComponent.prompts.length > 0) {
                editable.innerHTML = '<p>' + this.inlineAssistComponent.prompts[this.inlineAssistComponent.prompts.length - 1].response + '</p>';
            }
            this.inlineAssistComponent.hidePopup();
        } else if (args.command.label === 'Discard') {
            this.inlineAssistComponent.hidePopup();
        }
    }

    public responseSetting: ResponseSettingsModel = {
        items: [
            {
                label: 'Regenerate',
                iconCss: 'e-icons e-refresh',
                tooltip: 'Regenerate the response',
                disabled: true,
                groupBy: 'Actions'
            },
            {
                label: 'Copy',
                iconCss: 'e-icons e-copy',
                tooltip: 'Copy the response',
                disabled: false,
                groupBy: 'Actions'
            }
        ],
        itemSelect: this.onItemSelect
    }
    
    onClick(): void {
        this.inlineAssistComponent.showPopup();
    }

    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            this.inlineAssistComponent.addResponse(defaultResponse);
        }, 1000);
    };
}
