import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  IAxisLabelRenderEventArgs,
  ITextRenderEventArgs
} from '@syncfusion/ej2-angular-charts';
import {
  CategoryService,
  LegendService,
  DataLabelService,
  LineSeriesService
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [ChartModule],
  providers: [CategoryService, LegendService, DataLabelService, LineSeriesService],
  standalone: true,
  selector: 'app-container',
  template: `
  <ejs-chart
    id="chart-container"
    [primaryXAxis]="primaryXAxis"
    [primaryYAxis]="primaryYAxis"
    [legendSettings]="legendSettings"
    [title]="title"
    (axisLabelRender)="onAxisLabelRender($event)"
    (textRender)="onTextRender($event)">
    <e-series-collection>
      <e-series
        [dataSource]="chartData"
        type="Line"
        xName="month"
        yName="sales"
        name="Sales"
        [marker]="marker">
      </e-series>
    </e-series-collection>
  </ejs-chart>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public chartData?: { month: string; sales: number }[];
  public primaryYAxis?: Object;
  public legendSettings?: Object;
  public marker?: Object;
  public title?: string;

  ngOnInit(): void {
    // Enable data labels for the series
    this.marker = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };

    this.chartData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];

    this.primaryXAxis = { valueType: 'Category' };
    this.primaryYAxis = { labelFormat: '${value}K' };
    this.legendSettings = { visible: true };
    this.title = 'Sales Analysis';
  }

  // Axis label render handler (kept from your sample)
  public onAxisLabelRender(args: IAxisLabelRenderEventArgs): void {
    if (args.axis.valueType === 'Category' && typeof args.text === 'string') {
      if (args.text === 'Aug') {
        args.cancel = true; // hide a specific X-axis label
        return;
      }
      args.text = args.text.toUpperCase();
    }
    if (args.axis.valueType !== 'Category' && typeof args.value === 'number') {
      args.text = `$${args.value}K`;
    }
  }

  // textRender handler: customize data labels before they are rendered
  public onTextRender(args: ITextRenderEventArgs): void {
    console.log("text render event triggered");
    // Example 1: Format label text as currency with K suffix
    if (typeof args.point?.y === 'number') {
      args.text = `$${args.point.y}K`;
    }

    // Example 2: Highlight a particular month’s label (e.g., 'Aug')
    if (args.point?.x === 'Aug') {

      args.text = `${args.text} ★`;
    }
  }
}
