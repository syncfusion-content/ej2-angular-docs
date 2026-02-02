import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel, FileAttachmentSettingsModel } from '@syncfusion/ej2-interactive-chat';
import { Component } from '@angular/core';


@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div ejs-chatui id='chatui' [user]="currentUserModel"></div>`
})

export class AppComponent {
public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
}
