import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,RibbonSplitButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';
@Component({
imports: [ RibbonModule],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];

  public pasteButton: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste", items: this.pasteOptions };
  public boldButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-bold", content: "Bold", isToggle: true }
  public italicButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-italic", content: "Italic", isToggle: true }
  public underlineButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-underline", content: "Underline", isToggle: true };
}