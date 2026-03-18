import { ViewChild, Component } from '@angular/core';
import { InlineAIAssistModule, InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseSettingsModel, ResponseItemSelectEventArgs, InlineToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [InlineAIAssistModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('inlineAssistComponent')
    public inlineAssistComponent!: InlineAIAssistComponent;

    // Inline Toolbar Items with various properties
    public inlineToolbarSettings: InlineToolbarSettingsModel = {
        items: [
            {
                // Align property - positions item to the right
                iconCss: 'e-icons e-refresh',
                align: 'Right',
                type: 'Button'
            },
            {
                // CssClass property - custom styling
                type: 'Button',
                iconCss: 'e-icons e-user',
                align: 'Right',
                cssClass: 'custom-toolbar-btn'
            },
            {
                // Tooltip property - hover text
                type: 'Button',
                iconCss: 'e-icons e-maximize-2',
                align: 'Right',
                tooltip: 'Expand'
            },
            {
                // Disabled property - disabled state
                type: 'Button',
                iconCss: 'e-icons e-close',
                align: 'Right',
                disabled: true
            },
            {
                // Visible property - control visibility
                type: 'Button',
                iconCss: 'e-icons e-info',
                align: 'Right',
                visible: true
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
