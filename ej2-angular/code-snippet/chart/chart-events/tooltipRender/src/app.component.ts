import { Component, OnInit } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LineSeriesService,
  TooltipService,
  ITooltipRenderEventArgs,
  TooltipSettingsModel,
  IMouseEventArgs
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [ChartModule],
  providers: [CategoryService, LineSeriesService, TooltipService],
  standalone: true,
  selector: 'app-container',
  template: `
    <div style="width:650px; height:350px;">
      <ejs-chart
        id="chart-container"
        [primaryXAxis]="primaryXAxis"
        [primaryYAxis]="primaryYAxis"
        [title]="title"
        [tooltip]="tooltip"
        (tooltipRender)="onTooltipRender($event)">
        <e-series-collection>
          <e-series
            [dataSource]="chartData"
            type="Line"
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
  public tooltip?: TooltipSettingsModel;

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

    // Enable tooltip; event will customize the content/style
    this.tooltip = {
      enable: true,
      enableAnimation: true,
      shared: false
    };
  }

  // Customize tooltip before it renders
  public onTooltipRender(args: ITooltipRenderEventArgs): void {
    console.log("Tooltip render event was triggered")
  }

}
