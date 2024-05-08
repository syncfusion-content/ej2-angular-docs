import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime',
           title: 'AAPL Historical',
        };
    }

}


