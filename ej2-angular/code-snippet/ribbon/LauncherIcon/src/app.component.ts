import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
imports: [ RibbonModule],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" }
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter"};
}