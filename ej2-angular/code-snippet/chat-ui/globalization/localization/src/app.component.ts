import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { L10n } from '@syncfusion/ej2-base';
import { UserModel } from '@syncfusion/ej2-interactive-chat';
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
    public typingUsers: UserModel[] = [this.michaleUserModel];
    public locale?: string;
    public ngOnInit(): void {
        L10n.load({
            'de': {
                "chat-ui": {
                    "oneUserTyping": "{0} tippt",
                    "twoUserTyping": "{0} und {1} tippen",
                    "threeUserTyping": "{0}, {1} und {2} andere tippen gerade",
                    "multipleUsersTyping": "{0}, {1} und {2} andere tippen gerade"
                }
            }
        });
        this.locale =  'de';
    };
}
