import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { Component, ViewChild } from '@angular/core';
import { AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';

@Component({
    imports: [ AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `<div ejs-aiassistview #aiAssistViewComponent [enableAttachments]="enableAttachments" [attachmentSettings]="attachmentSettings" (promptRequest)="onPromptRequest()" (beforeAttachmentUpload)="onBeforeAttachmentUpload($event)" ></div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onBeforeAttachmentUpload = (args: UploadingEventArgs) => {
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
}
