import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockChartModule, ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, EmaIndicatorService, TooltipService, CrosshairService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [StockChartModule, ChartModule, ChartAllModule],
    providers: [CandleSeriesService, EmaIndicatorService, TooltipService, CrosshairService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [chartArea]="chartArea" [primaryYAxis]="primaryYAxis" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" [crosshair]="crosshair" [height]="height">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]="stockData" name="Apple Inc" type="Candle"></e-stockchart-series>
        </e-stockchart-series-collection>
        <e-stockchart-indicators>
            <e-stockchart-indicator type="Ema" field="Close" seriesName="Apple Inc" xName="date" high="high" low="low" open="open" close="close" [period]="10" [linearGradient]="indicatorGradient"></e-stockchart-indicator>
        </e-stockchart-indicators>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public chartArea?: Object;
    public primaryYAxis?: Object;
    public primaryXAxis?: Object;
    public stockData?: Object[];
    public indicatorGradient?: Object;
    public tooltip?: Object;
    public crosshair?: Object;
    public height?: string;

    ngOnInit(): void {
        this.stockData = chartData;
        this.chartArea = { border: { width: 0 } };
        this.primaryYAxis = {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 }
        };
        this.primaryXAxis = {
            majorGridLines: { color: 'transparent' },
            crosshairTooltip: { enable: true }
        };
        this.indicatorGradient = {
            x1: 0, y1: 0,
            x2: 0, y2: 1,
            gradientColorStop: [
                { color: 'red', offset: 0, opacity: 1 },
                { color: 'blue', offset: 100, opacity: 1 }
            ]
        };
        this.tooltip = { enable: true };
        this.crosshair = { enable: true };
        this.height = '350';
    }
}