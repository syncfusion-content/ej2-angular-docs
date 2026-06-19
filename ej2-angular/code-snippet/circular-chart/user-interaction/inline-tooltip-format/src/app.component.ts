import { CircularChart3DAllModule, PieSeries3DService, CircularChartTooltip3DService } from '@syncfusion/ej2-angular-charts'

import { Component, OnInit } from '@angular/core';

@Component({
imports: [ CircularChart3DAllModule ],
providers: [CircularChart3DAllModule, PieSeries3DService, CircularChartTooltip3DService],
standalone: true,
  selector: 'app-container',
  template: `<ejs-circularchart3d id="circularchart3d" [tooltip]="tooltip" [legendSettings]="legendSettings" [tilt]="tilt">
                <e-circularchart3d-series-collection> 
                  <e-circularchart3d-series type="Pie" [dataSource]="chartData" xName="x" yName="y">
                </e-circularchart3d-series>
            </e-circularchart3d-series-collection>
            </ejs-circularchart3d>`
})

export class AppComponent implements OnInit {
  
    public chartData: Object[] = [
        { x: new Date(2024, 0, 1), y: 13 },
        { x: new Date(2024, 1, 1), y: 13 },
        { x: new Date(2024, 2, 1), y: 17 },
        { x: new Date(2024, 3, 1), y: 13.5 }
      ];

    public tooltip: Object = {
      enable: true,
      format: '${point.x:MMM yyyy} : <b>${point.y:n2}%</b>'
    };

    public legendSettings: Object = {
      visible: false
    };

    public tilt: number = -45;
}
