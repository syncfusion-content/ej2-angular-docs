import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         CircularChart3DAllModule
    ],

providers: [CircularChart3DAllModule],
standalone: true,
  selector: 'app-container',
  template: `<ejs-circularchart3d style='display:block;' align='center' [tilt]='tilt' [legendSettings]="legendSettings">
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [emptyPointSettings]='emptyPointSettings' [dataLabel]='dataLabel'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
  public dataSource?: Object[];
  public title?: string;
  public legendSettings?: Object;
  public emptyPointSettings?: Object;
  public tilt?: number;
  public dataLabel?: Object;
  ngOnInit(): void {
    this.dataSource = [
      { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
      { x: 'Mar', y: undefined }, { x: 'Apr', y: 13.5 },
      { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
      { x: 'Jul', y: null }, { x: 'Aug', y: 25 },
      { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }];
    this.dataLabel = {
      visible: true,
      position: 'Outside'
    };
    this.emptyPointSettings = { mode: 'Zero' };
    this.legendSettings = { visible: false };
    this.tilt = -45
  }
}