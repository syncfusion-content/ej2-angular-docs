import { Component } from "@angular/core";
import { RibbonButtonSettingsModel,RibbonDropDownSettingsModel,DisplayMode } from '@syncfusion/ej2-angular-ribbon';
import { ItemModel } from "@syncfusion/ej2-angular-splitbuttons";
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
  public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: this.tableOptions };
  public Simplified: DisplayMode = DisplayMode.Simplified;
}