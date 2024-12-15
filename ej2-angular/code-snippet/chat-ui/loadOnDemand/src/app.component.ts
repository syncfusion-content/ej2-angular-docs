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
    public chatMessages: MessageModel[] = [];
    public ngOnInit(): void {
        for (let i = 1; i <= 150; i++) {
            this.chatMessages.push({
                text: i % 2 === 0 
                    ? `Message ${i} from Michale` 
                    : `Message ${i} from Albert`,
                author: i % 2 === 0 ? this.michaleUserModel : this.currentUserModel
            });
        }
    }
}
