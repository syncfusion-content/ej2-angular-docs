import { RibbonModule } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import { RibbonButtonSettingsModel, DisplayMode } from '@syncfusion/ej2-angular-ribbon';

@Component({
imports: [ RibbonModule],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public cutButton: RibbonButtonSettingsModel = { iconCss: "e-icons e-cut", content: "Cut" };
  public buttonDisplayMode: DisplayMode = DisplayMode.Simplified;
}