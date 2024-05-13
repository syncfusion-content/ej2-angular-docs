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
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [innerRadius]='innerRadius'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})

export class AppComponent implements OnInit {
  public dataSource?: Object[];
  public title?: string;
  public legendSettings?: Object;
  public innerRadius?: string;
  public tilt?: number;
  ngOnInit(): void {
    this.dataSource = [
      { 'x': 'Net-tution', y: 21 },
      { 'x': 'Private Gifts', y: 8 },
      { 'x': 'All Other', y: 9 },
      { 'x': 'Local Revenue', y: 4 },
      { 'x': 'State Revenue', y: 21 },
      { 'x': 'Federal Revenue', y: 16 },
      { 'x': 'Self-supporting Operations', y: 21 }
    ];
    this.innerRadius = '40%';
    this.legendSettings = {
      visible: true,
      position: 'Right',
      textWrap: 'Wrap',
      maximumLabelWidth: 60
    };
    this.tilt = -45
  }
}