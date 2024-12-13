import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule, UserModel, ChatUIComponent } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, ViewChild } from '@angular/core';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    template: `<button id="updateMessage" style="margin-bottom: 10px" class="e-btn e-primary" (click)="buttonClick()">Update Message</button>
        <div id="chatui" ejs-chatui #chatUIComponent [user]="currentUserModel" height="360px">
        <e-messages>
            <e-message text="Hi Michale, are we on track for the deadline?" [author]="currentUserModel" id="msg1"></e-message>
            <e-message text="Yes, the design phase is complete." [author]="michaleUserModel" id="msg2"></e-message>
            <e-message text="I’ll review it and send feedback by today." [author]="currentUserModel" id="msg3"></e-message>
        </e-messages>
    </div>`
})

export class AppComponent {
    @ViewChild('chatUIComponent')
    public chatUIComponent!: ChatUIComponent;

    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };

    public buttonClick = () => {
        this.chatUIComponent.updateMessage({text: "Hi Michael, are we still on schedule to meet the deadline?", author: this.currentUserModel}, 'msg1');
    };
}
