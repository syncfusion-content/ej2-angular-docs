import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel, RibbonModule, RibbonFileMenuService } from '@syncfusion/ej2-angular-ribbon';
import { MenuItemModel } from "@syncfusion/ej2-navigations";
@Component({
  imports: [ RibbonModule ],
  providers: [ RibbonFileMenuService ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public fileOptions: MenuItemModel[] =[
      { text: 'New', iconCss:'e-icons e-file-new', id: 'new' },
      { text: 'Open', iconCss:'e-icons e-folder-open', id: 'open' },
      { text: 'Rename', iconCss:'e-icons e-rename', id: 'rename' },
      {
          text: 'Save as',
          iconCss:'e-icons e-save',
          id: 'save',
          items: [
              { text: 'Microsoft Word (.docx)' },
              { text: 'Microsoft Word 97-2003(.doc)' },
              { text: 'Download as PDF' }
          ]
      }
  ];
  public fileSettings: FileMenuSettingsModel = {
      menuItems: this.fileOptions,
      showItemOnClick: true,
      visible: true
  };
}