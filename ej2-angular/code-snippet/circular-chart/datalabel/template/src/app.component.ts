import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit } from '@angular/core';
import { CircularChart3DTextRenderEventArgs } from '@syncfusion/ej2-charts';

@Component({
imports: [
         CircularChart3DAllModule
    ],

providers: [CircularChart3DAllModule],
standalone: true,
  selector: 'app-container',
  template: `<ejs-circularchart3d style='display:block;' align='center' [tilt]='tilt' [legendSettings]="legendSettings">
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [dataLabel]='dataLabel'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
  public dataSource?: Object[];
  public legendSettings?: Object;
  public dataLabel?: Object;
  public tilt?: number;
  ngOnInit(): void {
    this.dataSource = [
      { x: 'Jan', y: 13, text: 'Jan: 13' },
      { x: 'Feb', y: 13, text: 'Feb: 13' },
      { x: 'Mar', y: 17, text: 'Mar: 17' },
      { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }];
    this.legendSettings = { visible: false };
    this.dataLabel = {
      visible: true,
      name: 'text',
      template: "<div id='templateWrap' style='background-color:#bd18f9;border-radius: 3px; float: right;padding: 2px;line-height: 20px;text-align: center;'>" + "<img src='https://ej2.syncfusion.com/demos/src/chart/images/sunny.png' />" + "<div style='color:white; font-family:Roboto; font-style: medium; fontp-size:14px;float: right;padding: 2px;line-height: 20px;text-align: center;padding-right:6px'><span>${point.y}</span></div></div>"
    };
    this.tilt = -45
  }
}
