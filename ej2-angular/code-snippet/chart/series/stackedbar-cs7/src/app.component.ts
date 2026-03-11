import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { BarSeriesService, StackingBarSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ BarSeriesService, StackingBarSeriesService, CategoryService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar100' xName='x' yName='y' name='Apple' [emptyPointSettings]='emptyPointSettings'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' xName='x' yName='y1' name='Orange' [emptyPointSettings]='emptyPointSettings1'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' xName='x' yName='y2' name='Wastage' [emptyPointSettings]='emptyPointSettings2'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public emptyPointSettings?: object;
    public emptyPointSettings1?: object;
    public emptyPointSettings2?: object;
    public title?: string;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
        };
        this.title = 'Sales Comparison';
        this.emptyPointSettings = {mode: 'Zero'}
        this.emptyPointSettings1 = {mode: 'Gap'}
        this.emptyPointSettings2 = {mode: 'Average', fill: 'red', border: {width: 1.5, color:'green'}}
    }

}
