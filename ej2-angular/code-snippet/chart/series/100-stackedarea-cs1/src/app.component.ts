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
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y' name='USA' fill='url(#gradient1)'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y1' name='UK' fill='url(#gradient2)'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y2' name='Canada' fill='url(#gradient3)'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y3' name='China' fill='url(#gradient4)'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public border?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.border = {
            width: 2.5,
            color: 'white'
        }
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.title = 'Annual Temperature Comparison';
    }

}
