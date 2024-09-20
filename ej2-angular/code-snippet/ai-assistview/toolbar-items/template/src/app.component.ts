import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { DropDownButton } from '@syncfusion/ej2-angular-splitbuttons';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest()" [toolbarSettings]="toolbarSettings" (created)="created()"></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public toolbarSettings: ToolbarSettingsModel = {
        items: [
          {
            type: 'Input', align: 'Right',
            template: '<button id="ddMenu"></button>'
          }
        ]
    };

    public created = () => {
        var dropdown: DropDownButton = new DropDownButton({
            items: this.dropdownItems,
            content: 'English'
        }, '#ddMenu');
    };

    public dropdownItems = [
        {
            text: 'हिंदी'
        },
        {
            text: 'தமிழ்'
        },
        {
            text: 'తెలుగు'
        }
    ];
    
    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };

}
