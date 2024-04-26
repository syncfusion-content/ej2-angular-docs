import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit } from '@angular/core';
import { CircularChart3DPointRenderEventArgs } from '@syncfusion/ej2-charts';

@Component({
imports: [
         CircularChart3DAllModule
    ],

providers: [CircularChart3DAllModule],
standalone: true,
    selector: 'app-container',
    template: `<ejs-circularchart3d style='display:block;' align='center' (pointRender)="pointRender($event)" [tilt]='tilt' [legendSettings]="legendSettings">
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
    public dataSource?: Object[];
    public legendSettings?: Object;
    public dataLabel?: Object;
    public tilt?: number;
    public pointRender: Function | any;;
    ngOnInit(): void {
        this.dataSource = [
          { x: 'Jan', y: 3 }, 
                { x: 'Feb', y: 3.5 },
                { x: 'Mar', y: 7 }, 
                { x: 'Apr', y: 13.5 }];
        this.legendSettings = { visible: false };
        this.pointRender = (args: CircularChart3DPointRenderEventArgs) => {
          if ((args.point.x as string).indexOf('Apr') > -1) {
              args.fill = '#f4bc42';
          }
          else if ((args.point.x as string).indexOf('Mar') > -1) {
              args.fill = '#DE3D8A';
          }
          else if ((args.point.x as string).indexOf('Feb') > -1) {
              args.fill = '#F7523F';
          }
          else {
              args.fill = '#597cf9';
          }
      }
        this.tilt= -45
    }
}
