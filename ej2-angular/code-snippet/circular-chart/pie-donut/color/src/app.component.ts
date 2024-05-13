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
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [dataLabel]='dataLabel' [pointColorMapping]='pointColorMapping'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
  public dataSource?: Object[];
  public legendSettings?: Object;
  public dataLabel?: Object;
  public tilt?: number;
  public pointColorMapping?: string
  ngOnInit(): void {
    this.dataSource = [
      { x: 'Jan', y: 3, fill: '#498fff', text: 'January' },
      { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
      { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' },
      { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
    ];
    this.dataLabel = {
      visible: true,
    };
    this.pointColorMapping = 'fill'
    this.legendSettings = { visible: false };
    this.tilt = -45
  }
}
