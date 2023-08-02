import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, FileMenuSettingsModel } from '@syncfusion/ej2-angular-ribbon';
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public pasteButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paste", content: "Paste" };
  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public fileSettings: FileMenuSettingsModel = {
      text: 'App',
      menuItems: [{ text: "New", iconCss: "e-icons e-file-new", id: "new" }],
      visible: true
  };
}