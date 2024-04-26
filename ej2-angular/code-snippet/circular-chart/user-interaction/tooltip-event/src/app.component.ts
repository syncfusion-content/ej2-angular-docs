import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit, ViewChild } from '@angular/core';
import { CircularChart3DComponent, CircularChart3DTooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
imports: [
         CircularChart3DAllModule
    ],

providers: [CircularChart3DAllModule],
standalone: true,
  selector: 'app-container',
  template: `
  <ejs-circularchart3d #chart style='display:block;' align='center' (tooltipRender)="tooltipRender($event)" [tilt]='tilt' [legendSettings]="legendSettings" [tooltip]='tooltip'>
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
  public tooltipRender: Function | any;

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
    this.tooltip = { enable: true, format: '${point.x} : <b>${point.y}%</b>' }
    this.tilt = -45;
    this.tooltipRender = (args: CircularChart3DTooltipRenderEventArgs) => {
      if (args.point.index === 3) {
        args.text = args.point.x + '' + ':' + args.point.y + '' + ' ' + 'customtext';
        args.textStyle!.color = '#f48042';
      }
      else {
        args.textStyle!.color = 'White';
      }
    }
  }

}