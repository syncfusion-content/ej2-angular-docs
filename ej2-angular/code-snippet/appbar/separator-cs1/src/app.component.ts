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
        <button #defaultButtonCut ejs-button cssClass="e-inherit" iconCss="e-icons e-cut"></button>
        <button #defaultButtonCopy ejs-button cssClass="e-inherit" iconCss="e-icons e-copy"></button>
        <button #defaultButtonPaste ejs-button cssClass="e-inherit" iconCss="e-icons e-paste"></button>
        <div class="e-appbar-separator"></div>
        <button #defaultButtonBold ejs-button cssClass="e-inherit" iconCss="e-icons e-bold"></button>
        <button #defaultButtonUnderline ejs-button cssClass="e-inherit" iconCss="e-icons e-underline"></button>
        <button #defaultButtonItalic ejs-button cssClass="e-inherit" iconCss="e-icons e-italic"></button>
        <div class="e-appbar-separator"></div>
        <button #defaultButtonAlignLeft ejs-button cssClass="e-inherit" iconCss="e-icons e-align-left"></button>
        <button #defaultButtonAlignRight ejs-button cssClass="e-inherit" iconCss="e-icons e-align-right"></button>
        <button #defaultButtonAlignCenter ejs-button cssClass="e-inherit" iconCss="e-icons e-align-center"></button>
        <button #defaultButtonJustify ejs-button cssClass="e-inherit" iconCss="e-icons e-justify"></button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


