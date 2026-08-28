import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import {
  RangeAreaSeriesService,
  CategoryService,
} from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
  imports: [ChartModule, ChartAllModule],

  providers: [RangeAreaSeriesService, CategoryService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-chart id="chart-container" (pointRender)="pointRender($event)" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='RangeArea' xName='x' high='high' low='low' name='India' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`,
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  public primaryYAxis?: Object;
  public marker?: object;
  ngOnInit(): void {
    this.chartData = chartData;
    this.primaryXAxis = {
      title: 'Month',
      valueType: 'Category',
      edgeLabelPlacement: 'Shift',
    };
    this.primaryYAxis = {
      title: 'Temperature(Celsius)',
      minimum: 0,
      maximum: 20,
    };
    this.title = 'Maximum and Minimum Temperature';
    this.marker = { visible: true };
  }
  public pointRender(args: IPointRenderEventArgs): void {
    if (args.point.index % 2 !== 0) {
      args.fill = '#ff6347';
    } else {
      args.fill = '#009cb8';
    }
  }
}
