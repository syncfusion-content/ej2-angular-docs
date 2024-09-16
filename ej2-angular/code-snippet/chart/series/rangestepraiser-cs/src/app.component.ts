import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, 
    DateTimeService, CategoryService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService, RangeStepAreaSeriesService } from '@syncfusion/ej2-angular-charts'
import { chartData } from './datasource'


import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [ AreaSeriesService , RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, RangeStepAreaSeriesService,
               DateTimeService, CategoryService, MultiColoredAreaSeriesService,StackingStepAreaSeriesService,SplineRangeAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='RangeStepArea' xName='x' high='high' low='low' name='India' noRisers='true'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData: Object[] = chartData;
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
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
        this.title = 'Monthly Temperature Range'
    }
}



