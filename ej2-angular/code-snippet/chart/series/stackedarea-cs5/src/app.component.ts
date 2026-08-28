import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import {  StackingAreaSeriesService, DateTimeService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';

@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [StackingAreaSeriesService, DateTimeService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y' name='Organic' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y1' name='Fair-trade' ></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y2' name='Veg Alternatives'  [emptyPointSettings]='emptyPointSettings2'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y3' name='Others'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public emptyPointSettings?: Object;
    public emptyPointSettings2?: Object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.marker = {visible: true};
        this.title = 'Trend in Sales of Ethical Produce';
        this.emptyPointSettings = { mode: 'Zero', fill: 'red' };
        this.emptyPointSettings2 = { mode: 'Gap' };
    }

}
