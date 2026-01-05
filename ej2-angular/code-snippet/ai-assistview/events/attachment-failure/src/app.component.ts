import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { UploadingEventArgs } from '@syncfusion/ej2-interactive-chat';

@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent [enableAttachments]="enableAttachments" [attachmentSettings]="attachmentSettings" (promptRequest)="onPromptRequest()" (created)="onCreated()" (attachmentUploadFailure)="onAttachmentUploadFailure($event)" ></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onAttachmentUploadFailure = (args: UploadingEventArgs) => {
        // Your required action here
    };
    public onPromptRequest = () => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };
    public enableAttachments: boolean = true;
    public attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
    public onCreated = () => {
        // Your required action here
    };

}
