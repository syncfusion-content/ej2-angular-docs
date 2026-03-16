import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LegendService,
  DataLabelService,
  LineSeriesService,
  ScrollBarService
} from '@syncfusion/ej2-angular-charts';
import { IScrollEventArgs } from '@syncfusion/ej2-charts';

@Component({
  imports: [ChartModule],
  providers: [CategoryService, LegendService, DataLabelService, LineSeriesService, ScrollBarService],
  standalone: true,
  selector: 'app-container',
  template: `
    <div style="margin-bottom:8px;">
      <b>Scroll info:</b> {{ scrollInfo }}
    </div>

    <ejs-chart
      id="chart-container"
      [primaryXAxis]="primaryXAxis"
      [primaryYAxis]="primaryYAxis"
      [legendSettings]="legendSettings"
      [title]="title"
      (scrollChanged)="onScrollChanged($event)">

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
  public legendSettings?: any;
  public marker?: any;
  public title?: string;
  public chartData?: { month: string; sales: number }[];
  public scrollInfo = 'Scroll to see updates...';

  ngOnInit(): void {
    this.marker = { dataLabel: { visible: true } };

    // Generate enough points so the scrollbar is useful
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    this.chartData = Array.from({ length: 60 }, (_, i) => {
      const label = `${months[i % 12]} ${2022 + Math.floor(i / 12)}`;
      return { month: label, sales: Math.floor(20 + Math.random() * 40) };
    });

    // Enable axis scrollbar
    this.primaryXAxis = {
      valueType: 'Category',
      scrollbarSettings: { enable: true },
      labelIntersectAction: 'Rotate45'
    };

    this.primaryYAxis = { labelFormat: '${value}K' };
    this.legendSettings = { visible: true };
    this.title = 'Sales Analysis';
  }

  // Fires whenever the axis scrollbar position/range changes
  public onScrollChanged(args: IScrollEventArgs): void {
   console.log("scroll changed event was triggered");
  }
}
