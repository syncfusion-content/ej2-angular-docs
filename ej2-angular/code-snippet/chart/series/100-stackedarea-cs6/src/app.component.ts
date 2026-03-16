import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
    DateTimeService, CategoryService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [ AreaSeriesService , RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
               DateTimeService, CategoryService, MultiColoredAreaSeriesService,StackingStepAreaSeriesService,SplineRangeAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y' name='USA' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y1' name='UK'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y2' name='Canada' [emptyPointSettings]='emptyPointSettings1'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y3' name='China'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public emptyPointSettings?: Object;
    public emptyPointSettings1?: Object;
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.marker = {visible: true};
        this.title = 'Annual Temperature Comparison';
        this.emptyPointSettings = {mode: 'Zero', fill: 'red', border:{width: 2, color: 'green'}};
        this.emptyPointSettings1 = {mode: 'Average'};
    }

}
