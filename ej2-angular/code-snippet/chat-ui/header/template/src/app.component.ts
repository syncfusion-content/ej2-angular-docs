import { ChatUIModule } from '@syncfusion/ej2-angular-interactive-chat';
import { DropDownButton } from '@syncfusion/ej2-angular-splitbuttons';
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
        items: [
            {
              type: 'Input', align: 'Right',
              template: '<button id="ddMenu"></button>'
            }
          ]
    };
    public dropdownItems = [
        {
            text: 'Info'
        },
        {
            text: 'Search'
        },
        {
            text: 'Add to list'
        },
        {
            text: 'Mute'
        }
    ];
    public created = () => {
        var dropdown: DropDownButton = new DropDownButton({
            items: this.dropdownItems,
            content: 'Menu',
            iconCss: 'e-icons e-menu',
            cssClass: "custom-dropdown"
        }, '#ddMenu');
    };
}
