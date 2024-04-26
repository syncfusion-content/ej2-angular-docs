import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import {RibbonItemSize, RibbonGroupButtonSettingsModel, RibbonGroupButtonSelection } from '@syncfusion/ej2-angular-ribbon';


@Component({
imports: [ RibbonModule],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public groupButton: RibbonGroupButtonSettingsModel = {
    selection: RibbonGroupButtonSelection.Single,
    items: [
      {iconCss: 'e-icons e-align-left', content: 'Align Left'},
      {iconCss: 'e-icons e-align-center', content: 'Align Center', selected: true}, 
      {iconCss: 'e-icons e-align-right', content: 'Align Right'}, 
      {iconCss: 'e-icons e-justify', content: 'Justify'}
    ]
  }

  public smallSize: RibbonItemSize = RibbonItemSize.Small;
}