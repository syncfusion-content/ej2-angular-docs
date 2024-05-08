import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { LineSeriesService, SplineSeriesService, StepLineSeriesService, CategoryService, ParetoSeriesService, ColumnSeriesService,
       SplineAreaSeriesService, MultiColoredLineSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ LineSeriesService, SplineSeriesService, StepLineSeriesService, CategoryService, SplineAreaSeriesService, ParetoSeriesService, ColumnSeriesService,
               MultiColoredLineSeriesService, TooltipService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
    }

}


