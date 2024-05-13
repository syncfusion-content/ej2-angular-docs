import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { Component, ViewChild } from '@angular/core';
import { RibbonButtonSettingsModel, RibbonDropDownSettingsModel, DisplayMode, RibbonComponent } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from "@syncfusion/ej2-angular-splitbuttons";
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
@Component({
  imports: [ RibbonModule, CheckBoxModule ],
  standAlone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ribbon') ribbon: RibbonComponent;
  
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
  public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions };
  public Simplified: DisplayMode = DisplayMode.Simplified;

  public onChange(args: ChangeEventArgs) {
    this.ribbon.hideLayoutSwitcher = !args.checked;
  }
}