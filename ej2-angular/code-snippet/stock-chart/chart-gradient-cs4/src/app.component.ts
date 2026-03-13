import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { StockChartModule, ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [StockChartModule, ChartModule, ChartAllModule],
    providers: [LineSeriesService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [title]="title">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]="chartData" [radialGradient]="radialGradient"></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public radialGradient?: Object;
    public title?: string;

    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = { majorGridLines: { width: 0 } };
        this.primaryYAxis = { majorGridLines: { width: 0 }, interval: 10 };
        this.radialGradient = {
            cx: 0.5, cy: 0.5, r: 0.5,
            fx: 0.5, fy: 0.5,
            gradientColorStop: [
                { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
                { color: '#7C3AED', offset: 100, opacity: 1, lighten: 0, brighten: 0 }
            ]
        };
        this.title = 'AAPL Stock Price';
    }
}