import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule, UserModel } from '@syncfusion/ej2-angular-interactive-chat';

import { Component } from '@angular/core';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel" [placeholder]="placeholder">
        <e-messages>
            <e-message text="Hi Michale, are we on track for the deadline?" [author]="currentUserModel"></e-message>
            <e-message text="Yes, the design phase is complete." [author]="michaleUserModel"></e-message>
            <e-message text="I’ll review it and send feedback by today." [author]="currentUserModel"></e-message>
        </e-messages>
    </div>`
})

export class AppComponent {
    public placeholder: string = 'Start typing...';
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
}
