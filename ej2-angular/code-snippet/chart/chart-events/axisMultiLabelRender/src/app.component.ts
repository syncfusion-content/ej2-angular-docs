import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  IAxisMultiLabelRenderEventArgs,
  CategoryService,
  BarSeriesService,
  ColumnSeriesService,
  LineSeriesService,
  LegendService,
  DataLabelService,
  MultiLevelLabelService,
  SelectionService
} from '@syncfusion/ej2-angular-charts';


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
      [legendSettings]="legendSettings"
      (axisMultiLabelRender)="onAxisMultiLabelRender($event)">
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
  public primaryYAxis: any;
  public chartData?: Object[];
  public title?: string;
  public legendSettings: Object = { visible: false };

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
];;

    this.primaryXAxis = {
      valueType: 'Category',
      // Multi-level labels: two groups by index range
      multiLevelLabels: [
        {
          categories: [
            // Start and end accept number, date, or string values
            { start: -0.5, end: 3.5, text: 'Half Yearly 1' },
            { start: 3.5, end: 7.5, text: 'Half Yearly 2' }
          ],
          border: { type: 'Rectangle', color: '#BDBDBD', width: 1 },
          alignment: 'Center'
        }
      ]
    };

    this.primaryYAxis = {
      title: 'Gold Medals'
    };

    this.title = 'Olympic Medals';
  }

  // axisMultiLabelRender: customize or cancel multi-level labels at render time
  public onAxisMultiLabelRender(args: IAxisMultiLabelRenderEventArgs): void {
    console.log("Axis MultiLabel Render Event was triggered");
  }
}
