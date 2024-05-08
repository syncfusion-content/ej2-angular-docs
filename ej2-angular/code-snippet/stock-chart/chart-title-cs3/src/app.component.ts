import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, CandleSeriesService, LegendService, CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts'
import { TooltipService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ TooltipService, DateTimeService, CandleSeriesService, LegendService, CategoryService, LineSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [theme]='theme'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    theme?: string;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
        this.theme = 'HighContrast';
    }
}


