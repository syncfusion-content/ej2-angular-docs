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

    // CSS Class for styling the component
    public cssClass: string = 'custom-container';
    
    // Popup dimensions
    public popupWidth: string = '650px';
    public popupHeight: string = '350px';
    
    // Placeholder text for the input area
    public placeholder: string = 'Type your prompt here...';
    
    // Z-index for managing stacking order
    public zIndex: number = 4000;

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

    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
        let defaultResponse = 'For real-time prompt processing, connect to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

        this.inlineAssistComponent.addResponse(defaultResponse);

        }, 1000);
    };
}
