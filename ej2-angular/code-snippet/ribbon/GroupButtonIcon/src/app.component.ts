import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon'

import { Component } from "@angular/core";
import {RibbonItemSize, RibbonGroupButtonSettingsModel } from '@syncfusion/ej2-angular-ribbon';


@Component({
imports: [ RibbonModule],
standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public groupButtonIcon: RibbonGroupButtonSettingsModel = {
    items: [
      {iconCss: 'e-icons e-align-left'},
      {iconCss: 'e-icons e-align-center'}, 
      {iconCss: 'e-icons e-align-right'}, 
      {iconCss: 'e-icons e-justify'}
    ]
  }

  public smallSize: RibbonItemSize = RibbonItemSize.Small;
}