import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel } from '@syncfusion/ej2-interactive-chat';

import { Component } from '@angular/core';


@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel" [mentionUsers] =  "mentionUsers">
        <e-messages>
            <e-message text="Want to get coffee tomorrow?" [author]="currentUserModel"></e-message>
            <e-message text="Sure! What time?" [author]="michaleUserModel"></e-message>
            <e-message text="{0} How about 10 AM?" [author]="currentUserModel" [mentionUsers] = "[michaleUserModel]"></e-message>
        </e-messages>
    </div>`
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
    public customUserModel: UserModel = { user: 'Reena', id: 'custom-user' };
    public mentionUsers: UserModel[] = [this.currentUserModel, this.customUserModel];
}
