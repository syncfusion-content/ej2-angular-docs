import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
    SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
        SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='MultiColoredLine' xName='x' yName='y' name='London' width=2 [marker]='marker'
            pointColorMapping= 'color'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = [{ x: 2005, y: 28 , color: 'red'}, { x: 2006, y: 25, color:'green'},
        { x: 2007, y: 26, color: '#ff0097' }, { x: 2008, y: 27, color: 'crimson' },
        { x: 2009, y: 32, color: 'blue' }, { x: 2010, y: 35 ,color: 'darkorange'}];
        this.marker = { visible: true, width: 10, height: 10 };
        this.title = 'Climate Graph-2012';
    }

}


