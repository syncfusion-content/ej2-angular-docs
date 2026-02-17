import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, CandleSeriesService, CrosshairService, TooltipService} from '@syncfusion/ej2-angular-charts'




import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ DateTimeService, CandleSeriesService, CrosshairService, TooltipService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container"
    [title]='title' [crosshair]='crosshair'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date' High='high' Low='low' Open='open' Close ='close' Name='Apple Inc'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public stockchartData?: Object[];
    public title?: string;
    crosshair?: Object;
    ngOnInit(): void {
        // Title for stock chart
        this.title = 'AAPL Historical';
        this.crosshair = { enable: true };
        this.stockchartData = chartData;
    }
}



