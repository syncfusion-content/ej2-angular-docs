import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit, ViewChild } from '@angular/core';
import { CircularChart3DComponent } from '@syncfusion/ej2-angular-charts';

@Component({
imports: [
         CircularChart3DAllModule
    ],

providers: [CircularChart3DAllModule],
standalone: true,
  selector: 'app-container',
  template: `
  <ejs-circularchart3d #chart style='display:block;' align='center' [tilt]='tilt' [legendSettings]="legendSettings" [tooltip]='tooltip'>
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
  public dataSource?: Object[];
  public title?: string;
  public legendSettings?: Object;
  public tilt?: number;
  public tooltip?: object;

  @ViewChild('chart')
  public chartObj?: CircularChart3DComponent;

  ngOnInit(): void {
    this.dataSource = [
      { x: 'Jan', y: 13 },
      { x: 'Feb', y: 13 },
      { x: 'Mar', y: 17 },
      { x: 'Apr', y: 13.5 }
    ];
    this.legendSettings = { visible: false };
    this.tooltip = { 
        enable: true,
        template:  "<div id='templateWrap' style='background-color:#bd18f9;border-radius: 3px; float: right;padding: 2px;line-height: 20px;text-align: center;'>"+
        "<img src='https://ej2.syncfusion.com/demos/src/chart/images/sunny.png' />" +
        "<div style='color:white; font-family:Roboto; font-style: medium; fontp-size:14px;float: right;padding: 2px;line-height: 20px;text-align: center;padding-right:6px'><span>${y}</span></div></div>"
     }
    this.tilt = -45;
  }

}