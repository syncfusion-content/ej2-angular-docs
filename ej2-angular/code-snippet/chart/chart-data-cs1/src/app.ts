import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LineSeriesService,
} from '@syncfusion/ej2-angular-charts';
import { AxisModel } from '@syncfusion/ej2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartModule],
  providers: [CategoryService, LineSeriesService],
  template: `
        <ejs-chart
            id="chart-container"
            [primaryXAxis]='primaryXAxis'>
            <e-series-collection>
                <e-series
                    [dataSource]='chartData'
                    type='Line'
                    xName='month'
                    yName='sales'>
                </e-series>
            </e-series-collection>
        </ejs-chart>
    `,
})
export class App implements OnInit {
  public primaryXAxis?: AxisModel;
  public chartData?: Object[];
  ngOnInit(): void {
    this.chartData = [
      { month: 'Jan', sales: 35 },
      { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 },
      { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 },
      { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 },
      { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 },
      { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 },
      { month: 'Dec', sales: 32 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
    };
  }
}
