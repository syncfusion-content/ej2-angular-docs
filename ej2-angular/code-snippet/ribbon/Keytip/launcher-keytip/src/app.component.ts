import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule, RibbonFileMenuService, RibbonKeyTipService } from '@syncfusion/ej2-angular-ribbon'

import { Component, ViewChild } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel, RibbonSplitButtonSettingsModel, RibbonComponent } from '@syncfusion/ej2-angular-ribbon';


@Component({
imports: [ RibbonModule],

providers: [ RibbonFileMenuService, RibbonKeyTipService ],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild('ribbon') ribbon!: RibbonComponent; 

  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste", items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }] };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };

  public fileMenuSettings: FileMenuSettingsModel = {
    visible: true,
    menuItems: [
      { text: "New", iconCss: "e-icons e-file-new", id: "new" },
      { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
      { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
      { text: "Save as", iconCss: "e-icons e-save", id: "save" }
    ]
  }

  ribbonCreated(): void {
    this.ribbon.ribbonKeyTipModule.showKeyTips('H');
  }

}