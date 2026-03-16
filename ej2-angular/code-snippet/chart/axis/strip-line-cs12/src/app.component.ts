import { AreaSeriesService, ChartModule } from '@syncfusion/ej2-angular-charts';
import {
  StripLineService,
  ColumnSeriesService,
  DataLabelService,
  LineSeriesService,
} from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { stripData } from './datasource';
@Component({
  imports: [ChartModule],

  providers: [
    StripLineService,
    AreaSeriesService,
    ColumnSeriesService,
    DataLabelService,
    LineSeriesService,
  ],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' width='2' yName='y' name='Internet'></e-series>>
        </e-series-collection>
    </ejs-chart>`,
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  public primaryYAxis?: Object;
  ngOnInit(): void {
    this.chartData = [
      { x: 1, y: 5 },
      { x: 2, y: 15 },
      { x: 3, y: 0 },
      { x: 4, y: 12 },
      { x: 5, y: 5 },
      { x: 6, y: 8 },
      { x: 7, y: 6 },
      { x: 8, y: 12 },
      { x: 9, y: 20 },
      { x: 10, y: 7 },
    ];
    this.primaryYAxis = {
      title: 'Runs',
      stripLines: [
        {
          start: 20,
          end: 24,
          text: 'Y-axis Plot Band',
          color: '#ff512f',
          visible: true,
          textStyle: { size: 15, textAlignment: 'Far', color: 'black' },
        },
        {
          start: 0.5,
          end: 0.7,
          text: 'Y-Axis Plot Line',
          color: 'Red',
          visible: true,
          textStyle: { size: 15, textAlignment: 'Far', color: 'black' },
        },
      ],
    };
    this.primaryXAxis = {
      title: 'Overs',
      stripLines: [
        {
          start: 1.4,
          end: 1.45,
          text: 'X-Axis Plot Line',
          color: 'red',
          visible: true,
          textStyle: { size: 15, textAlignment: 'Far', color: 'black' },
        },
        {
          start: 5,
          end: 7,
          text: 'X-Axis Plot Band',
          color: 'blue',
          visible: true,
          opacity: 0.5,
          textStyle: { size: 15, color: 'black' },
        },
      ],
    };
    this.title = 'India Vs Australia 1st match';
  }
}
