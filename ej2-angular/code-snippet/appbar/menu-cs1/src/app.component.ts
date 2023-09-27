

import { Component } from "@angular/core";
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></button>
        <ejs-menu #defaultMenuCompany cssClass="e-inherit" [items]='companyMenuItems'></ejs-menu>
        <ejs-menu #defaultMenuProducts cssClass="e-inherit" [items]='productMenuItems'></ejs-menu>
        <ejs-menu #defaultMenuAbout cssClass="e-inherit" [items]='aboutMenuItems'></ejs-menu>
        <ejs-menu #defaultMenuCarrers cssClass="e-inherit" [items]='carrerMenuItems'></ejs-menu>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonLogin ejs-button cssClass="e-inherit">Login</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {
  public companyMenuItems: MenuItemModel[] = [
    {
        text : 'Company',
        items: [
            { text: 'About Us' },
            { text: 'Customers' },
            { text: 'Blog' },
            { text: 'Careers' }
        ]
    }
  ];
  public productMenuItems: MenuItemModel[] = [
    {
        text : 'Products',
        items: [
            { text: 'Developer' },
            { text: 'Analytics' },
            { text: 'Reporting' },
            { text: 'Help Desk' }
        ]
    }
  ];
  public aboutMenuItems: MenuItemModel[] = [
    {
        text : 'About Us'
    }
  ];
  public carrerMenuItems: MenuItemModel[] = [
    {
        text : 'Carrers'
    }
  ];
}


