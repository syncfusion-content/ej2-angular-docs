import { ViewChild, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, InlineToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import { DropDownButton } from '@syncfusion/ej2-angular-splitbuttons';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';


@Component({
    imports: [CommonModule, InlineAIAssistModule],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    // Language selection items for DropDownButton
    public languageItems: ItemModel[] = [
        { text: 'हिंदी' },
        { text: 'தமிழ்' },
        { text: 'తెలుగు' }
    ];
    public created = () => {
        var dropdown: DropDownButton = new DropDownButton({
            items: this.languageItems,
            content: 'English',
            cssClass: "custom-dropdown",
            iconCss: 'e-icons e-translate'
        }, '#ddMenu');
    };
    
    // Inline toolbar with template containing DropDownButton
    public inlineToolbarSettings: InlineToolbarSettingsModel = {
        items: [
            {
                type: 'Input',
                template: '<button id="ddMenu"></button>',
                align: 'Right'
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
