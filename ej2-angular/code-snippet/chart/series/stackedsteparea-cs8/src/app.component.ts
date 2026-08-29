import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, StackingStepAreaSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [DateTimeService, StackingStepAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y' name='USA' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y1' name='UK'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public emptyPointSettings?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.marker = { visible: true, width: 10, height:10 };
        this.title = 'Annual Temperature Comparison';
        this.emptyPointSettings = { mode: 'Average', fill: 'red', border: {width: 2, color: 'Green'} };
    }

}
