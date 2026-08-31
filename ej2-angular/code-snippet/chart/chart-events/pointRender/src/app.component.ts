import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  ColumnSeriesService,
  IPointRenderEventArgs
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
        (pointRender)="onPointRender($event)">
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

  // pointRender: customize each point's appearance before rendering
  public onPointRender(args: IPointRenderEventArgs): void {
    // Highlight the highest value in red and the lowest in green
    if (typeof args.point?.y === 'number') {
      const yValues = (this.chartData || []).map(d => d.sales);
      const max = Math.max(...yValues);
      const min = Math.min(...yValues);
      if (args.point.y === max) {
        args.fill = '#e74c3c';
      } else if (args.point.y === min) {
        args.fill = '#27ae60';
      }
    }
  }
}
