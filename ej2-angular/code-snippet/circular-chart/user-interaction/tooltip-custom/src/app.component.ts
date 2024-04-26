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
  <ejs-circularchart3d #chart style='display:block;' align='center' [highlightColor]="highlightColor" [highlightMode]='highlightMode' [tilt]='tilt' [legendSettings]="legendSettings" [tooltip]='tooltip'>
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
  public highlightColor?: string;
  public highlightMode?: string;

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
      format: '${series.name} ${point.x} : ${point.y}',
      fill: '#7bb4eb',
      border: {
          width: 2,
          color: 'grey'
      }
     }
    this.tilt = -45;
    this.highlightColor = 'Red';
    this.highlightMode = 'Point';
  }

}