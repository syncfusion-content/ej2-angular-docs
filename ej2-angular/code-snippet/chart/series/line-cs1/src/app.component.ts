import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
    SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { lineData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
        SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'
    [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='month' yName='sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
     public primaryXAxis?: Object;
      public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = lineData;
        this.primaryXAxis = {
            interval: 1,
            valueType: 'Category',
        };
        this.primaryYAxis =
        {
            title: 'Sales',
        },
        this.title = 'Monthly Sales Comparison';
    }

}
