import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, RibbonItemSize, ItemModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  public pasteOptions: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];

  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;
  public mediumSize: RibbonItemSize = RibbonItemSize.Medium;
  
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste", items: this.pasteOptions };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
}