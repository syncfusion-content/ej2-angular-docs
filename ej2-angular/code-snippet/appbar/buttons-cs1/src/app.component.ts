import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppBarModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'



import { Component } from "@angular/core";
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [ AppBarModule, ButtonModule, DropDownButtonModule],


standalone: true,
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></button>
        <button #defaultDropDownButtonProduct ejs-dropdownbutton cssClass="e-inherit" [items]='productDropDownButtonItems' content="Products"></button>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonLogin ejs-button cssClass="e-inherit">Login</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {
  public productDropDownButtonItems: ItemModel[] = [
    { text: 'Developer' },
    { text: 'Analytics' },
    { text: 'Reporting' },
    { text: 'E-Signature' },
    { text: 'Help Desk' }
  ];
}


