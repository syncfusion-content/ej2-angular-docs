import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule, RibbonContextualTabService } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule],

providers: [ RibbonContextualTabService ],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Format Painter" };

  public headerButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-text-header", content: "Text Header" };
  public wrapButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-text-wrap", content: "Text Wrap" };
  public annotationButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-text-annotation", content: "Text Annotation" };

  public altButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-text-alternative", content: "Alt Text" };

  public forwardButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-bring-forward", content: "Bring Forward" };
  public backwardButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-send-backward", content: "Send Backward" };
  public selectionButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-show-hide-panel", content: "Selection Pane" };

}