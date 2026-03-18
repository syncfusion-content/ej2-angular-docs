import { ViewChild, Component } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, CommandSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    public showPopup: boolean = false;

    // Command settings with sample commands
    public commandSettings: CommandSettingsModel = {
        commands: [
            {
                label: 'Summarize',
                prompt: 'Summarize the content'
            },
            {
                label: 'Shorten',
                prompt: 'Shorten the content'
            },
            {
                label: 'Translate',
                prompt: 'Translate the content'
            },
            {
                label: 'Make professional',
                prompt: 'Make the content more professional'
            }
        ]
    };

    public itemSelect = (args: ResponseItemSelectEventArgs) => {
        if (args.command.label === 'Accept') {
            const editable = document.getElementById('editableText') as HTMLElement | null;
            if (editable) {
                editable.innerHTML = '<p>' + this.inlineAssistComponent.prompts[this.inlineAssistComponent.prompts.length - 1 ].response + '</p>';
            }
            this.inlineAssistComponent.hidePopup();
            this.showPopup = false;
        } else if (args.command.label === 'Discard') {
            this.inlineAssistComponent.hidePopup();
            this.showPopup = false;
        }
    }

    public responseSetting: ResponseSettingsModel = {
        itemSelect:  this.itemSelect
    }

    // showCommandPopup method - displays command popup with commands
    onShowCommandPopup(): void {
        this.inlineAssistComponent.showPopup();
        this.inlineAssistComponent.commandSettings = this.commandSettings;
        this.inlineAssistComponent.dataBind();
        this.showPopup = true;
        // showCommandPopup method - displays the command action popup
        this.inlineAssistComponent.showCommandPopup();
    }

    // hideCommandPopup method - hides the command popup
    onHideCommandPopup(): void {
        this.inlineAssistComponent.hideCommandPopup();
        this.showPopup = false;
    }
    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
        let defaultResponse = 'For real-time prompt processing, connect to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

        this.inlineAssistComponent.addResponse(defaultResponse);

        }, 1000);
    };

    public close = () => {
        if (this.showPopup) {
            this.inlineAssistComponent.showPopup();
        }
    }
}
