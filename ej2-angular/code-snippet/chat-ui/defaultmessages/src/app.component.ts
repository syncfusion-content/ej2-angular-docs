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
    template: `<div ejs-chatui id='chatUI' [messages]="messages" [user]="currentUserModel"></div>`
})

export class AppComponent {
    public currentUserModel = {
        user: 'Albert',
        id: 'user1'
    };
    public michaleUserModel = {
        user: 'Michale Suyama',
        id: 'user2'
    };
    public messages = [
        {
            id: "msg1",
            author: this.currentUserModel,
            text: 'Want to get coffee tomorrow?'
        },
        {
            id: "msg2",
            author: this.michaleUserModel,
            text: 'Sure! What time?'
        },
        {
            id: "msg3",
            author: this.currentUserModel,
            text: 'How about 10 AM?'
        }
    ];
}
