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
  <ejs-circularchart3d #chart style='display:block;' align='center' [tilt]='tilt' [legendSettings]="legendSettings">
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' >
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
    public dataSource?: Object[];
    public legendSettings?: Object;
    public tilt?: number;

    @ViewChild('chart')
    public chartObj?: CircularChart3DComponent;

    ngOnInit(): void {
        this.dataSource = [
          { x: 'Jan', y: 3 },  { x: 'Feb', y: 3.5 }, 
          { x: 'Mar', y: 7 },  { x: 'Apr', y: 13.5 },
          { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
          { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
          { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, 
          { x: 'Nov', y: 15 }, { x: 'Dec', y: 15 }
        ];
        this.legendSettings = { height: '150', width: '80' };
        this.tilt = -45;
    }

}