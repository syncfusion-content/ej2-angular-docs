import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  BarSeriesService,
  ColumnSeriesService,
  LineSeriesService,
  LegendService,
  DataLabelService,
  MultiLevelLabelService,
  SelectionService,
  ILegendRenderEventArgs
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
      (legendRender)="onLegendRender($event)">
      <e-series-collection>
        <e-series
          [dataSource]="chartData"
          type="Column"
          xName="country"
          yName="gold"
          name="Gold">
        </e-series>
        <e-series
          [dataSource]="chartData"
          type="Column"
          xName="country"
          yName="silver"
          name="Silver">
        </e-series>
        <e-series
          [dataSource]="chartData"
          type="Column"
          xName="country"
          yName="bronze"
          name="Bronze">
        </e-series>
      </e-series-collection>
    </ejs-chart>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public legendSettings?: Object;
  public title?: string;
  public chartData?: { country: string; gold: number; silver: number; bronze: number }[];

  ngOnInit(): void {
    this.chartData = [
      { country: 'USA',       gold: 50, silver: 70, bronze: 45 },
      { country: 'China',     gold: 40, silver: 60, bronze: 55 },
      { country: 'Japan',     gold: 70, silver: 60, bronze: 50 },
      { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
      { country: 'France',    gold: 50, silver: 45, bronze: 35 },
      { country: 'Germany',   gold: 40, silver: 30, bronze: 22 },
      { country: 'Italy',     gold: 40, silver: 35, bronze: 37 },
      { country: 'Sweden',    gold: 30, silver: 25, bronze: 27 }
    ];

    this.primaryXAxis = { valueType: 'Category', title: 'Countries' };
    this.primaryYAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
    this.legendSettings = { visible: true, position: 'Top' };
    this.title = 'Olympic Medals';
  }

  // legendRender: customize legend items before they are rendered
  public onLegendRender(args: ILegendRenderEventArgs): void {
    console.log('Legend render event was triggered');
    switch (args.text) {
      case 'Gold':
        args.text = 'Gold (Au)';
        args.fill = '#FFC107';
        args.shape = 'Circle';
        break;
      case 'Silver':
        args.fill = '#9E9E9E';
        args.shape = 'Rectangle';
        break;
      case 'Bronze':
        args.fill = '#CD7F32';
        args.shape = 'Diamond';
        break;
    }
  }
}
