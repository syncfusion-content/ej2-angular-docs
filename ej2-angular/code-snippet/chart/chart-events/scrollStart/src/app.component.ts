import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LegendService,
  DataLabelService,
  LineSeriesService,
  ScrollBarService,
  ZoomService,
  IResizeEventArgs,
  IScrollEventArgs
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [ChartModule],
  providers: [CategoryService, LegendService, DataLabelService, LineSeriesService, ScrollBarService, ZoomService],
  standalone: true,
  selector: 'app-container',
  template: `
<ejs-chart
  id="chart-container"
  [primaryXAxis]="primaryXAxis"
  [primaryYAxis]="primaryYAxis"
  [legendSettings]="legendSettings"
  [title]="title"
  [zoomSettings]="zoomSettings"
  (scrollStart)="onScrollStart($event)"">
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
  public primaryXAxis?: any;
  public primaryYAxis?: any;
  public legendSettings?: Object;
  public marker?: Object;
  public title?: string;
  public chartData?: { month: string; sales: number }[];
  public zoomSettings?: any;

  ngOnInit(): void {
    // Data label for chart series
    this.marker = { dataLabel: { visible: true } };

    this.chartData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];

    // Enable scrollbar on the X axis
    this.primaryXAxis = {
      valueType: 'Category',
      scrollbarSettings: { enable: true }
    };

    this.primaryYAxis = { labelFormat: '${value}K' };
    this.legendSettings = { visible: true };
    this.title = 'Sales Analysis';

    // Enable zooming (selection, mouse wheel, pinch) on X-axis
    this.zoomSettings = {
      enableSelectionZooming: true,
      enableMouseWheelZooming: true,
      enablePinchZooming: true,
      enableDeferredZooming: false,
      mode: 'X' // Zoom horizontally; use 'XY' to allow both axes
    };
  }

  // Fires when the scrollbar interaction starts
  public onScrollStart(args: IScrollEventArgs): void {
    console.log('Scroll started:', this.rangeInfo(args));
  }


  private rangeInfo(args: IScrollEventArgs) {
    const c = (args as any).currentRange || {};
    const p = (args as any).previousRange || {};
    return {
      axis: (args as any).axis?.name,
      current: { start: c.minimum, end: c.maximum },
      previous: { start: p.minimum, end: p.maximum }
    };
  }
}
