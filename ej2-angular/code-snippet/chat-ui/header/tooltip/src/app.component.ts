import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { UserModel, ToolbarSettingsModel } from '@syncfusion/ej2-interactive-chat';
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
    public headerToolbar: ToolbarSettingsModel = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Refresh' }]
    };
}
