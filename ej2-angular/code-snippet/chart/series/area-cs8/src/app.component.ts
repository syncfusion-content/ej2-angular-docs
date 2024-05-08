import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, 
    DateTimeService, CategoryService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService } from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { stepData } from './datasource';
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
            <e-series [dataSource]='chartData' type='MultiColoredArea' xName='x' yName='y' name='England'
            segmentAxis='X' [segments]='segments'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public segments?: Object[];
    ngOnInit(): void {
        this.chartData = [{ x: 2005, y: 28 }, { x: 2006, y: 25}, { x: 2007, y: 26 }, { x: 2008, y: 27 },
        { x: 2009, y: 32}, { x: 2010, y: 35 }, { x: 2011, y: 25 }];
        this.title = 'England - Run Rate';
        this.segments =[{
                    value: 2007,
                    color: 'blue'
                }, {
                    value: 2009,
                    color: 'lightgreen'
                }, {
                    color: 'orange'
        }];
    }

}


