import { Component } from "@angular/core";
import { RibbonTooltipSettingsModel, RibbonButtonSettingsModel, RibbonSplitButtonSettingsModel, ItemModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public pasteSettings: ItemModel[] = [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }];
  public pasteButton: RibbonSplitButtonSettingsModel = { iconCss: 'e-icons e-paste', items: this.pasteSettings, content: 'Paste' }

  public cutOptions: RibbonTooltipSettingsModel = { title: "Cut", content: "Places the selected text or object on the clipboard so that you can paste it somewhere else.", cssClass: "custom-tooltip" };
  public formatOptions: RibbonTooltipSettingsModel = { title: "Format Painter", content: "Copies the formatting style of a selected text or object and applies it to other content within the document.", cssClass: "custom-tooltip" };
  public copyOptions: RibbonTooltipSettingsModel = { title: "Copy", content: "Copies the chosen text or object to the clipboard so that you can reuse it elsewhere.", cssClass: "custom-tooltip" };
  public pasteOptions: RibbonTooltipSettingsModel = { title: "Paste", content: "Insert the clipboard content where the cursor is currently placed.", cssClass: "custom-tooltip" };
}