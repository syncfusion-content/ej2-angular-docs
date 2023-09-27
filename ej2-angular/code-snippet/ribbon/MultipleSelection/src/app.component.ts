import { Component } from "@angular/core";
import {RibbonItemSize, RibbonGroupButtonSettingsModel, RibbonGroupButtonSelection } from '@syncfusion/ej2-angular-ribbon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public multipleSelection: RibbonGroupButtonSettingsModel = {
    selection: RibbonGroupButtonSelection.Multiple,
    items: [
      {iconCss: 'e-icons e-bold', content: 'Bold'},
      {iconCss: 'e-icons e-italic', content: 'Italic', selected: true}, 
      {iconCss: 'e-icons e-underline', content: 'Underline'}, 
      {iconCss: 'e-icons e-strikethrough', content: 'Strikethrough', selected: true}
    ]
  }

  public smallSize: RibbonItemSize = RibbonItemSize.Small;
}