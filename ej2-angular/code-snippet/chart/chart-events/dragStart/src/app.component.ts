import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LineSeriesService,
  DataEditingService,
  ZoomService,
  IDataEditingEventArgs
} from '@syncfusion/ej2-angular-charts';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [ChartModule],
  providers: [CategoryService, LineSeriesService, DataEditingService, ZoomService],
  template: `
    <div style="width:650px; height:350px;">
      <ejs-chart
        id="chart-container"
        [primaryXAxis]="primaryXAxis"
        [primaryYAxis]="primaryYAxis"
        [title]="title"
        (dragStart)="onDragStart($event)">
        <e-series-collection>
          <e-series
            [dataSource]="chartData"
            type="Line"
            xName="month"
            yName="sales"
            name="Sales"
            [dragSettings]="dragSettings">
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
  public dragSettings = { enable: true, type: 'Y' }; // drag along Y only

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
    this.title = 'Monthly Sales (Drag a point to edit)';
  }

  // Fires when user starts dragging a data point
  onDragStart(args: IDataEditingEventArgs): void {
    // Inspect available details
    console.log('dragStart event was triggered');
  }
}
