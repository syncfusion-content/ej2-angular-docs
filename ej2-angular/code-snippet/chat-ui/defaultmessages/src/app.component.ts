import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule, UserModel } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Chat UI component
    template: `<div id="chatui" ejs-chatui [user]="currentUserModel">
        <e-messages>
            <e-message text="Want to get coffee tomorrow?" [author]="currentUserModel" id="msg1"></e-message>
            <e-message text="Sure! What time?" [author]="michaleUserModel" id="msg2"></e-message>
            <e-message text="How about 10 AM?" [author]="currentUserModel" id="msg3"></e-message>
        </e-messages>
    </div>`
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
}
