import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
    DateTimeService, CategoryService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { splinedata } from './datasource';

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
            <e-series [dataSource]='chartData' type='SplineRangeArea' xName='x' high='high' low='low' name='England' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
            <e-series [dataSource]='chartData' type='SplineRangeArea' xName='x' high='high1' low='low1' name='India' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public emptyPointSettings1?: Object;
    public emptyPointSettings?: Object;
    ngOnInit(): void {
        this.chartData = splinedata;
        this.primaryXAxis = {
           valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            majorTickLines: { width: 0 }
        };
        this.marker = {visible: true};
        this.title = 'Monthly Temperature Range'
        this.emptyPointSettings = {
            mode: 'Average', fill: 'red', border: { width: 2, color: 'green' }
        }
    }
}
