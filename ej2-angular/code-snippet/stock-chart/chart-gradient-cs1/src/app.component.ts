import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StockChartModule, ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { StockDetails } from './datasource';

@Component({
    imports: [StockChartModule, ChartModule, ChartAllModule],
    providers: [CandleSeriesService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [title]="title">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]="stockData" type="Candle" name="AAPL" xName="Date" high="High" low="Low" open="Open" close="Close" volume="Volume" [linearGradient]="linearGradient"></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public stockData?: Object[];
    public linearGradient?: Object;
    public title?: string;

    ngOnInit(): void {
        this.stockData = StockDetails;
        this.primaryXAxis = { valueType: 'DateTime' };
        this.primaryYAxis = { interval: 10 };
        this.linearGradient = {
            x1: 0, y1: 0,
            x2: 1, y2: 1,
            gradientColorStop: [
                { color: '#FF7E5F', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
                { color: '#FEB47B', offset: 100, opacity: 1, lighten: 0, brighten: 0.5 }
            ]
        };
        this.title = 'AAPL Stock Price';
    }
}