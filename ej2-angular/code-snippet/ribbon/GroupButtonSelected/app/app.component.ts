import { Component } from "@angular/core";
import {RibbonItemSize, RibbonGroupButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public groupButtonSelected: RibbonGroupButtonSettingsModel = {
    items: [
      {iconCss: 'e-icons e-align-left', content: 'Align Left'},
      {iconCss: 'e-icons e-align-center', content: 'Align Center', selected: true}, 
      {iconCss: 'e-icons e-align-right', content: 'Align Right'}, 
      {iconCss: 'e-icons e-justify', content: 'Justify'}
    ]
  }

  public smallSize: RibbonItemSize = RibbonItemSize.Small;
}