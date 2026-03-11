import {
  ChartModule,
  DateTimeService,
  StepLineSeriesService,
  ColumnSeriesService,
  LegendService,
  TooltipService,
  CategoryService,
  ISharedTooltipRenderEventArgs
} from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [ChartModule],
  providers: [DateTimeService, StepLineSeriesService, LegendService, TooltipService, CategoryService, ColumnSeriesService],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-chart
      id="chart-container"
      [primaryXAxis]='primaryXAxis'
      [primaryYAxis]='primaryYAxis'
      [title]='title'
      [tooltip]='tooltip'
      (sharedTooltipRender)='onSharedTooltipRender($event)'>
      <e-series-collection>
        <e-series
          [dataSource]='chartData'
          type='StepLine'
          xName='x'
          yName='y'
          width='2'
          name='China'
          [marker]='marker'>
        </e-series>
        <e-series
          [dataSource]='chartData'
          type='Column'
          xName='x'
          yName='y1'
          name='USA'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public chartData?: Object[];
  public title?: string;
  public marker?: Object;
  public tooltip?: Object;

  ngOnInit(): void {
    this.chartData = [
      { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
      { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
      { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
      { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
      { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
      { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
      { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
      { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
    ];

    this.primaryXAxis = {
      valueType: 'DateTime'
    };

    this.primaryYAxis = { title: 'Rate (%)' };

    // Enable shared tooltip
    this.tooltip = {
      enable: true,
      shared: true
    };

    this.marker = { visible: true, width: 10, height: 10 };
    this.title = 'Unemployment Rates 1975-2010';
  }

  // Event: customize the shared tooltip before it renders
  public onSharedTooltipRender(args: ISharedTooltipRenderEventArgs): void {
    console.log('Shared tooltip rendered event was triggered');
    // Update the header text
    args.headerText = 'Shared Tooltip';
    // Customize each line of the shared tooltip text
    if (args.text && args.text.length) {
      // Example transformation: "China : 16" -> "China value: 16%"
      args.text = args.text.map((line: string) => {
        return line.replace(':', ' value:') + '%';
      });
    }
  }
}
