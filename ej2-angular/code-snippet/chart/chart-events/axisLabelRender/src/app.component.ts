import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  IAxisLabelRenderEventArgs
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
      (axisLabelRender)="onAxisLabelRender($event)">
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
  public chartData?: Object[];
  public primaryYAxis?: Object;
  public legendSettings?: Object;
  public marker?: Object;
  public title?: string;

  ngOnInit(): void {
    // Data label for chart series
    this.marker = {
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

    this.primaryXAxis = {
      valueType: 'Category'
    };

    this.primaryYAxis = {
      labelFormat: '${value}K'
    };

    this.legendSettings = { visible: true };
    this.title = 'Sales Analysis';
  }

  // Axis label render handler
  public onAxisLabelRender(args: IAxisLabelRenderEventArgs): void {
    console.log("Chart axis label render event was triggered");
    // Example 1: Uppercase category X-axis labels
    if (args.axis.valueType === 'Category' && typeof args.text === 'string') {
      // Hide a specific label (e.g., 'Aug')
      if (args.text === 'Aug') {
        args.cancel = true;
        return;
      }
      args.text = args.text.toUpperCase();
    }

    // Example 2: Custom format for Y-axis numeric labels
    if (args.axis.valueType !== 'Category' && typeof args.value === 'number') {
      // Format as currency with 'K' suffix
      args.text = `$${args.value}K`;
    }
  }
}
