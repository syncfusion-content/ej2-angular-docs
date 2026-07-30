import { Component } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LineSeriesService, 
  TooltipService
} from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartModule],
  providers: [CategoryService, LineSeriesService, TooltipService],
  template: `
    <ejs-chart
        id="chart-container"
        [primaryXAxis]='primaryXAxis'
        [title]='title'
        [tooltip]='tooltip'>
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
export class App {
  public primaryXAxis: Object = { valueType: 'Category' };
  public title: string = 'Monthly Sales';
  public tooltip: Object = { enable: true };
  public chartData: { month: string; sales: number }[] = [
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
}
