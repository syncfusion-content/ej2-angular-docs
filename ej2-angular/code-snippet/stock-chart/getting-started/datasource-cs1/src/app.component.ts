import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartAllModule, StockChartAllModule
    ],

providers: [ CategoryService, LineSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" >
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date' High='high' Low='low' Open='open' Close ='close' Name='Apple'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public stockchartData?: Object[];
    ngOnInit(): void {
        // Title for stock chart
        this.stockchartData = chartData;
    }
}




