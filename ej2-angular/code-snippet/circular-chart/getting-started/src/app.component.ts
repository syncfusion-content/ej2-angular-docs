import {
  CircularChart3DModule,
  CircularChartTooltip3DService,
  CircularChartLegend3DService,
  CircularChartDataLabel3DService,
  PieSeries3DService,
} from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
  imports: [CircularChart3DModule],
  standalone: true,
  selector: 'app-root',
  providers: [
    CircularChartTooltip3DService,
    CircularChartLegend3DService,
    CircularChartDataLabel3DService,
    PieSeries3DService,
  ],
  template: `<ejs-circularchart3d id="chart3d-container" style='display:block;' align='center' tilt='-45' [title]='title' [tooltip]='tooltip' [legendSettings]='legendSettings'>
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [dataLabel]='dataLabel'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`,
})
export class AppComponent {
  public dataSource: { x: string; y: number }[] = [
    { x: 'Chrome', y: 62.92 },
    { x: 'Internet Explorer', y: 6.12 },
    { x: 'Opera', y: 3.15 },
    { x: 'Edge', y: 5.5 },
    { x: 'Safari', y: 19.97 },
    { x: 'Others', y: 2.34 },
  ];
  public tooltip: Object = { enable: true };
  public title: string = 'Browser Market Shares in November 2023';
  public legendSettings: Object = { visible: true, position: 'Right' };
  public dataLabel: Object = {
    visible: true,
    name: 'x',
    position: 'Outside',
    font: { fontWeight: '600' },
    connectorStyle: { length: '40px' },
  };
}
