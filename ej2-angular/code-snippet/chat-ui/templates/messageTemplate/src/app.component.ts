import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule, UserModel, MessageModel } from '@syncfusion/ej2-angular-interactive-chat';

import { Component } from '@angular/core';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
    public chatMessages: MessageModel[] = [
        {
            author: this.currentUserModel,
            text: "Hi Michale, are we on track for the deadline?"
        },
        {
            author: this.michaleUserModel,
            text: "Yes, the design phase is complete."
        },
        {
            author: this.currentUserModel,
            text: "I’ll review it and send feedback by today."
        }
    ];
}
