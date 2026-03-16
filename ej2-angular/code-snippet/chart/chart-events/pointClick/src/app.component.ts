import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  ColumnSeriesService,
  ILoadedEventArgs,
  IPointEventArgs
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [ChartModule],
  providers: [CategoryService, ColumnSeriesService],
  standalone: true,
  selector: 'app-container',
  template: `
    <div style="width:650px; height:350px;">
      <ejs-chart
        id="chart-container"
        [primaryXAxis]="primaryXAxis"
        [primaryYAxis]="primaryYAxis"
        [title]="title"
        (pointClick)="onPointClick($event)">
        <e-series-collection>
          <e-series
            [dataSource]="chartData"
            type="Column"
            xName="month"
            yName="sales"
            name="Sales">
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public title?: string;
  public chartData?: { month: string; sales: number }[];

  ngOnInit(): void {
    this.chartData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    this.primaryXAxis = { valueType: 'Category', title: 'Month' };
    this.primaryYAxis = { title: 'Sales' };
    this.title = 'Monthly Sales';
  }

  // pointClick: handle point click actions
  public onPointClick(args: IPointEventArgs): void {
    console.log('Point click event was triggered');
  }
}
