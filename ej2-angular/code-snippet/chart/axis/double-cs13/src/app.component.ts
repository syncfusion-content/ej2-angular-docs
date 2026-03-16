import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ColumnSeriesService, AreaSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ ColumnSeriesService, AreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='England'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            valueType: 'Double',
            title: 'Overs'
        };
        this.primaryYAxis = {
           title: 'Runs',
           valueType: 'Double',
           rangePadding: 'Additional'
        };
        this.title = 'England - Run Rate';
    }

}
