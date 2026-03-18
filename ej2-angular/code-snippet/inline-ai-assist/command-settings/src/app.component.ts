import { ViewChild, Component } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, CommandSettingsModel, CommandItemSelectEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

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

    public commandItemSelect = (args: CommandItemSelectEventArgs) => {
        // Your required action here
    }

    public commandSetting: CommandSettingsModel = {
        commands: [
            {
                label: 'Summarize',
                prompt: 'Summarize the content',
                iconCss: 'e-icons e-collapse-2',
                groupBy: 'Improve content',
                tooltip: 'Summarize'
            },
            {
                label: 'Shorten',
                prompt: 'Shorten the content',
                iconCss: 'e-icons e-shorten',
                groupBy: 'Improve content',
                tooltip: 'Shorten',
                disabled: true
            },
            {
                label: 'Translate',
                prompt: 'Translate the content',
                iconCss: 'e-icons e-translate',
                groupBy: 'Edit content',
                disabled: true
            },
            {
                label: 'Make professional',
                prompt: 'Make the content more professional',
                iconCss: 'e-icons e-elaborate',
                groupBy: 'Edit content'
            }
        ],
        popupWidth: '300px',
        popupHeight: '250px',
        itemSelect: this.commandItemSelect
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
