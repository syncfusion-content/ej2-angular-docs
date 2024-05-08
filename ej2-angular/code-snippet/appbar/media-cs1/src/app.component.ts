import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppBarModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from "@angular/core";

@Component({
imports: [ AppBarModule, ButtonModule],


standalone: true,
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></button>
        <button #defaultButtonHome ejs-button cssClass="e-inherit">Home</button>
        <button #defaultButtonAbout ejs-button cssClass="e-inherit">About</button>
        <button #defaultButtonProducts ejs-button cssClass="e-inherit">Products</button>
        <button #defaultButtonContacts ejs-button cssClass="e-inherit">Contacts</button>
        <div class="e-appbar-spacer"></div>
        <div class="e-appbar-separator"></div>
        <button #defaultButtonLogin ejs-button cssClass="e-inherit">Login</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


