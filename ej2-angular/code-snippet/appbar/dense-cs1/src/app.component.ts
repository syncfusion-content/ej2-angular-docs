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
      <ejs-appbar colorMode="Primary" mode="Dense">
        <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></button>
        <span class="dense">Dense AppBar</span>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonLogin ejs-button cssClass="e-inherit">FREE TRIAL</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


