import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel, FileAttachmentSettingsModel } from '@syncfusion/ej2-interactive-chat';
import { Component } from '@angular/core';
import { SuccessEventArgs } from '@syncfusion/ej2-angular-inputs';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel" [enableAttachments]="enableAttachments" [attachmentSettings]="attachmentSettings" (attachmentUploadSuccess)="onAttachmentUploadSuccess($event)"></div>`
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };

    public onAttachmentUploadSuccess = (args: SuccessEventArgs) => {
        // Your required action here
    };

    public enableAttachments: boolean = true;
    public attachmentSettings: FileAttachmentSettingsModel = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
}