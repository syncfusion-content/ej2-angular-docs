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

    // Toolbar position state
    public toolbarPosition: string = 'Bottom';

    // Inline Toolbar Settings with position, toolbar settings, and toolbar text
    public inlineToolbarSettings: InlineToolbarSettingsModel = {
        // toolbarPosition property - control position of toolbar
        toolbarPosition: this.toolbarPosition,
        // Custom toolbar items with settings
        items: [
            {
                // Toolbar text property
                text: 'Welcome User !',
                align: 'Right'
            },
            {
                iconCss: 'e-icons e-assistview-icon',
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

    onTogglePosition(): void {
        // Toggle toolbar position between Inline and Bottom
        this.toolbarPosition = this.toolbarPosition === 'Inline' ? 'Bottom' : 'Inline';
        this.inlineToolbarSettings.toolbarPosition = this.toolbarPosition;
    }

    public onPromptRequest = (args: InlinePromptRequestEventArgs) => {
        setTimeout(() => {
        let defaultResponse = 'For real-time prompt processing, connect to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

        this.inlineAssistComponent.addResponse(defaultResponse);

        }, 1000);
    };
}
