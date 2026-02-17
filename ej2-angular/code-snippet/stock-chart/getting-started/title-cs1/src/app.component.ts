import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, CandleSeriesService} from '@syncfusion/ej2-angular-charts'




import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartAllModule, StockChartAllModule
    ],

providers: [ DateTimeService, CandleSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container"
    [title]='title'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date' High='high' Low='low' Open='open' Close ='close' Name='Apple Inc'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public stockchartData?: Object[];
    public title?: string;
    ngOnInit(): void {
        // Title for stock chart
        this.title = 'AAPL Stock Price';
        this.stockchartData = chartData;
    }
}



