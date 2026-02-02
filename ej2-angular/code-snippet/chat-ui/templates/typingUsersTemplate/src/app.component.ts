import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel } from '@syncfusion/ej2-interactive-chat';
import { Component } from '@angular/core';


@Component({
    imports: [ ChatUIModule ],
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    public currentUserModel: UserModel = { user: 'Albert', id: 'user1' };
    public michaleUserModel: UserModel = { user: 'Michale Suyama', id: 'user2' };
    public reenaUserModel: UserModel = { user: 'Reena', id: 'user3' };
    public typingUsers: UserModel[] = [this.michaleUserModel, this.reenaUserModel];
    public getUserTemplate(context: any): string {
        if (!context.users || context.users.length === 0) {
            return '';
        }
    
        const usersList = context.users.map((user: any, i: number) => {
            const isLastUser: boolean = i === context.users.length - 1;
            return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
        }).join(' ');
    
        return `
            <div class="typing-wrapper">
                ${usersList} are typing...
            </div>
        `;
    }
}
