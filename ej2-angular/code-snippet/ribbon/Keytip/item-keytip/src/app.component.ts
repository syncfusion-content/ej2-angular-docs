import { Component, ViewChild } from "@angular/core";
import { RibbonItemSize, RibbonButtonSettingsModel, RibbonGroupButtonSelection, RibbonSplitButtonSettingsModel, RibbonComponent, RibbonComboBoxSettingsModel, RibbonGroupButtonSettingsModel, RibbonColorPickerSettingsModel, RibbonGallerySettingsModel, RibbonDropDownSettingsModel, RibbonCheckBoxSettingsModel } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild('ribbon') ribbon!: RibbonComponent; 
  
  public largeSize = RibbonItemSize.Large;

  public pasteSettings: RibbonSplitButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste", items: [{ text: 'Keep Source Format' }, { text: 'Merge format' }, { text: 'Keep text only' }] };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };

  public pasteOptions = { title: "Paste", cssClass: 'custom-tooltip', content: "Paste content here.</br> Add content on the clipboard to your document.", iconCss: "e-icons e-paste" }
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-format-painter", content: "Format Painter" }
  public styleOptions: RibbonComboBoxSettingsModel = {
    dataSource: ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"],
    index: 2,
    width: '150px',
    allowFiltering: true
  }
  public sizeOptions: RibbonComboBoxSettingsModel = {
    dataSource: ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72", "96"],
    index: 4,
    width: "65px"
  }
  public groupButtonSingle: RibbonGroupButtonSettingsModel = {
    selection: RibbonGroupButtonSelection.Single,
    items: [
      { iconCss: 'e-icons e-bold', keyTip: '1', selected: true },
      { iconCss: 'e-icons e-italic', keyTip: '2' },
      { iconCss: 'e-icons e-underline', keyTip: '3' },
      { iconCss: 'e-icons e-strikethrough', keyTip: '4' },
      { iconCss: 'e-icons e-change-case', keyTip: '5' }
    ]
  }
  public colorPicker: RibbonColorPickerSettingsModel = { value: "#123456" }
  public gallerySettings: RibbonGallerySettingsModel = {
    itemCount: 3,
    groups: [{
      itemWidth: '100',
      header: 'Styles',
      items: [{
        content: 'Normal'
      }, {
        content: 'No Spacing'
      }, {
        content: 'Heading 1'
      }, {
        content: 'Heading 2'
      }, {
        content: 'Heading 3'
      }, {
        content: 'Heading 4'
      }, {
        content: 'Heading 5'
      }]
    }]
  }
  public tableSettings: RibbonDropDownSettingsModel = {
    iconCss: 'e-icons e-table', content: 'Table',
    items: [{ text: 'Insert Table' }, { text: 'Draw Table' }, { text: 'Convert Table' }, { text: 'Excel SpreadSheet' }]
  }
  public rulerSettings: RibbonCheckBoxSettingsModel = { label: "Ruler", checked: false }
  public gridSettings: RibbonCheckBoxSettingsModel = { label: "Gridlines", checked: false }
  public navigationSettings: RibbonCheckBoxSettingsModel = { label: "Navigation Pane", checked: true }

  ribbonCreated(): void {
    this.ribbon.ribbonKeyTipModule.showKeyTips('H');
  }

}