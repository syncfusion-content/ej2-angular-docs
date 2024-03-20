import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  public copyButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-copy", content: "Copy" };
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public formatButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Format Painter" };

  public styleButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-style", content: "Style" };
  public textButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-font-name", content: "Text Box" };
  public paintButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-paint-bucket", content: "Paint" };

}