import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)" [activeView]="activeView">
        <e-views>
            <e-view type="Assist" name="Prompt"></e-view>
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

    public activeView: number = 1;

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

}
