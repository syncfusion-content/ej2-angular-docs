import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel, FileAttachmentSettingsModel } from '@syncfusion/ej2-interactive-chat';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
import { Component } from '@angular/core';


@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel" (created)="onCreated()" [enableAttachments]="enableAttachments" [attachmentSettings]="attachmentSettings" (beforeAttachmentUpload)="onBeforeAttachmentUpload($event)"></div>`
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };   

    public onCreated = () => {
        // Your required action here
    };

    public onBeforeAttachmentUpload = (args: UploadingEventArgs) => {
        // Your required action here
    };
    public enableAttachments: boolean = true;
    public attachmentSettings: FileAttachmentSettingsModel = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
}