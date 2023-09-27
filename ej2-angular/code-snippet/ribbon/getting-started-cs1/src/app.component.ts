import { Component } from '@angular/core';
import { FileMenuSettingsModel, RibbonButtonSettingsModel, RibbonSplitButtonSettingsModel, RibbonComboBoxSettingsModel, RibbonDropDownSettingsModel, RibbonItemSize, RibbonCheckBoxSettingsModel, RibbonColorPickerSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", items: [{ text: "Keep Source Format" }, { text: "Merge format" }, { text: "Keep text only" }], content: "Paste" };
  public tableSettings: RibbonDropDownSettingsModel = { iconCss: "e-icons e-table", content: "Table", items: [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }] };

  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" };
  public boldButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-bold", content: "Bold" };
  public italicButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-italic", content: "Italic" };
  public underlineButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-underline", content: "Underline" };
  public strikethroughButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-strikethrough", content: "Strikethrough" };
  public changecaseButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-change-case", content: "Change Case" };
  public editorButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-edit", content: "Editor" };
  public chartButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-chart", content: "Chart" };
  public printButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-print-layout", content: "Print Layout" };
  public webButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-web-layout", content: "Web Layout" };

  public fontSize: string[] = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"];
  public fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];

  public fontstyleSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontStyle, index: 3, width: "150px", allowFiltering: true };
  public fontsizeSettings: RibbonComboBoxSettingsModel = { dataSource: this.fontSize, index: 3, width: "65px", allowFiltering: true };

  public colorSettings: RibbonColorPickerSettingsModel = { value: "#123456" };

  public ruler: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: false };
  public grid: RibbonCheckBoxSettingsModel = { label: "Gridlines", checked: false };
  public navigation: RibbonCheckBoxSettingsModel = { label: "Navigation Pane", checked: false };

  public fileSettings: FileMenuSettingsModel = {
    menuItems: [
      { text: "New", iconCss: "e-icons e-file-new", id: "new" },
      { text: "Open", iconCss: "e-icons e-folder-open", id: "open" },
      { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
      { text: "Save as", iconCss: "e-icons e-save", id: "save" }
    ],
    visible: true
  };

  public largeSize: RibbonItemSize = RibbonItemSize.Large;
  public smallSize: RibbonItemSize = RibbonItemSize.Small;

  public Simplified: DisplayMode = DisplayMode.Simplified;
  public Overflow: DisplayMode = DisplayMode.Overflow;

}
