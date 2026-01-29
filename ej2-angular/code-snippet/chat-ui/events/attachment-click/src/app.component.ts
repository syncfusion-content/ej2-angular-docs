import { ChatUIModule,ChatAttachmentClickEventArgs } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel, FileAttachmentSettingsModel } from '@syncfusion/ej2-interactive-chat';
import { Component } from '@angular/core';

@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel" (created)="onCreated()" [enableAttachments]="enableAttachments" [attachmentSettings]="attachmentSettings"></div>`
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };

    public onAttachmentClick = (args: ChatAttachmentClickEventArgs) => {
        // Your required action here
    };

    public enableAttachments: boolean = true;
    public attachmentSettings: FileAttachmentSettingsModel = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        attachmentClick: this.onAttachmentClick
    };
}