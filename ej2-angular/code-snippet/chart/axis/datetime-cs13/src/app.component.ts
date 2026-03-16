import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { dateData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = dateData;
        this.primaryXAxis = {
            valueType: 'DateTime',
            intervalType: 'Years'
        };
        this.title = 'Average Sales Comparison';
    }

}
