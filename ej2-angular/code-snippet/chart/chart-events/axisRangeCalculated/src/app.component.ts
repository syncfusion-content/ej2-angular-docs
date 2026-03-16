import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  IAxisRangeCalculatedEventArgs,
  CategoryService,
  BarSeriesService,
  ColumnSeriesService,
  LineSeriesService,
  LegendService,
  DataLabelService,
  MultiLevelLabelService,
  SelectionService
} from '@syncfusion/ej2-angular-charts';
// import { categoryData } from './datasource';

@Component({
  imports: [ChartModule],
  providers: [
    CategoryService,
    BarSeriesService,
    ColumnSeriesService,
    LineSeriesService,
    LegendService,
    DataLabelService,
    MultiLevelLabelService,
    SelectionService
  ],
  standalone: true,
  selector: 'app-container',
  template: `
    <ejs-chart
      id="chart-container"
      [primaryXAxis]="primaryXAxis"
      [primaryYAxis]="primaryYAxis"
      [title]="title"
      (axisRangeCalculated)="onAxisRangeCalculated($event)">
      <e-series-collection>
        <e-series
          [dataSource]="chartData"
          type="Column"
          xName="country"
          yName="gold"
          name="Gold">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: any;
  public primaryYAxis?: any;
  public chartData?: Object[];
  public title?: string;

  ngOnInit(): void {
    this.chartData = [
        { country: "USA", gold: 50, silver: 70, bronze: 45 },
        { country: "China", gold: 40, silver: 60, bronze: 55 },
        { country: "Japan", gold: 70, silver: 60, bronze: 50 },
        { country: "Australia", gold: 60, silver: 56, bronze: 40 },
        { country: "France", gold: 50, silver: 45, bronze: 35 },
        { country: "Germany", gold: 40, silver: 30, bronze: 22 },
        { country: "Italy", gold: 40, silver: 35, bronze: 37 },
        { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
    ];

    // Keep X axis as Category; let the event adjust min/max/interval
    this.primaryXAxis = {
      valueType: 'Category',
      title: 'Countries'
    };

    // Basic Y axis; event will add padding and adjust interval
    this.primaryYAxis = {
      title: 'Gold Medals'
    };

    this.title = 'Olympic Medals';
  }

  // axisRangeCalculated: modify the computed min/max/interval for axes
  public onAxisRangeCalculated(args: IAxisRangeCalculatedEventArgs): void {
    console.log('Axis range calculated event was triggered');

    if (args.axis.valueType === 'Category' && args.axis.name === 'primaryXAxis') {
      args.minimum = 1;
      args.maximum = 5;
      args.interval = 2;
      return;
    }

    // For Y axis (numeric), add 10% headroom and compute a clean interval
    if (args.axis.orientation === 'Vertical') {
      const currentMin = Number(args.minimum ?? 0);
      const currentMax = Number(args.maximum ?? 0);
      const range = Math.max(0, currentMax - currentMin);
      const pad = range * 0.1; // 10% headroom

      // Ensure baseline at 0 and padded max rounded to a nice step
      const newMin = 0;
      const newMax = Math.ceil((currentMax + pad) / 5) * 5;

      args.minimum = newMin;
      args.maximum = newMax;

      // Choose about 5 ticks
      const approxTicks = 5;
      const rawInterval = (newMax - newMin) / approxTicks || 1;
      // Snap interval to 1/2/5 multiples for readability
      const snap = (val: number) => {
        const pow = Math.pow(10, Math.floor(Math.log10(val)));
        const norm = val / pow;
        let m = 1;
        if (norm > 5) m = 10;
        else if (norm > 2) m = 5;
        else if (norm > 1) m = 2;
        return m * pow;
      };
      args.interval = snap(rawInterval);
    }
  }
}
