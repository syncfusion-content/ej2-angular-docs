import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';


@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)">
        <e-views>
            <e-view type="Assist" name="Prompt" iconCss="e-icons e-assistview-icon"></e-view>
            <e-view type="Custom" name="Response" iconCss="e-icons e-comment-show" [viewTemplate]="viewTemplate">
                <ng-template #viewTemplate>
                    <div class="view-container"><h5>Response view content</h5></div>
                </ng-template>
            </e-view>
        </e-views>
    </div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

}
