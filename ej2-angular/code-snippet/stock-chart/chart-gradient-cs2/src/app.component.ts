import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StockChartModule, ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, TrendlinesService, TooltipService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [StockChartModule, ChartModule, ChartAllModule],
    providers: [CandleSeriesService, TrendlinesService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [tooltip]="tooltip" [chartArea]="chartArea" [title]="title">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]="chartData" name="Apple Inc" fill="#0066FF" type="Candle" [trendlines]="trendlines"></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public tooltip?: Object;
    public chartArea?: Object;
    public trendlines?: Object[];
    public title?: string;

    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = { title: 'Months' };
        this.primaryYAxis = { title: 'Rupees against Dollars', interval: 5 };
        this.tooltip = { enable: true };
        this.chartArea = { border: { width: 0 } };
        this.trendlines = [{
            type: 'MovingAverage',
            enableTooltip: false,
            width: 2,
            linearGradient: {
                x1: 0, y1: 0,
                x2: 0, y2: 1,
                gradientColorStop: [
                    { color: '#6A0DAD', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
                    { color: '#FFFF00', offset: 100, opacity: 1, lighten: 0, brighten: 0 }
                ]
            }
        }];
        this.title = 'Historical Indian Rupee Rate (INR USD)';
    }
}