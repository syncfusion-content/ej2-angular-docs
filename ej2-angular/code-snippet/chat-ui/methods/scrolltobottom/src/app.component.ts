import { ChatUIModule, ChatUIComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel } from '@syncfusion/ej2-interactive-chat';
import { Component, ViewChild } from '@angular/core';


@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    template: `<button id="scrollToBottom" style="margin-bottom: 10px" class="e-btn e-primary" (click)="buttonClick()">Scroll to bottom</button>
        <div id="chatui" ejs-chatui #chatUIComponent [user]="currentUserModel" height="360px">
        <e-messages>
            <e-message text="Want to get coffee tomorrow?" [author]="currentUserModel"></e-message>
            <e-message text="Sure! What time?" [author]="michaleUserModel"></e-message>
            <e-message text="How about 10 AM?" [author]="currentUserModel"></e-message>
            <e-message text="Perfect" [author]="michaleUserModel"></e-message>
            <e-message text="See you!" [author]="currentUserModel"></e-message>
            <e-message text="Bye!" [author]="michaleUserModel"></e-message>
        </e-messages>
    </div>`
})

export class AppComponent {
    @ViewChild('chatUIComponent')
    public chatUIComponent!: ChatUIComponent;

    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };

    public buttonClick = () => {
        this.chatUIComponent.scrollToBottom();
    };
}
