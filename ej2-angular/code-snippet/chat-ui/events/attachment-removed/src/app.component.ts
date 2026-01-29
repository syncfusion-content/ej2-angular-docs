import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel, FileAttachmentSettingsModel } from '@syncfusion/ej2-interactive-chat';
import { Component } from '@angular/core';
import { RemovingEventArgs } from '@syncfusion/ej2-angular-inputs';


@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel" [enableAttachments]="enableAttachments" [attachmentSettings]="attachmentSettings" (attachmentRemoved)="onAttachmentRemoved($event)"></div>`
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };

    public onAttachmentRemoved = (args: RemovingEventArgs) => {
        // Your required action here
    };

    public enableAttachments: boolean = true;
    public attachmentSettings: FileAttachmentSettingsModel = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
}