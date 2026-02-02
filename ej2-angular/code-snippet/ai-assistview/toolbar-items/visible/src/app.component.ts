import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)" [toolbarSettings]="toolbarSettings"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public toolbarSettings: ToolbarSettingsModel = {
        items: [
            { type: 'Button', iconCss: 'e-icons e-refresh', align: 'Right', visible: false },
            { type: 'Button', iconCss: 'e-icons e-user', align: 'Right' }
          ]
    };
    
    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

}
