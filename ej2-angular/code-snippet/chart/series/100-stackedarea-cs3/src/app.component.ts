import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
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
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y' [border]='border' name='USA' dashArray='2,5'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y1' [border]='border' name='UK' dashArray='2,5'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y2' [border]='border' name='Canada' dashArray='2,5'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y3' [border]='border' name='China' dashArray='2,5'></e-series>
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


