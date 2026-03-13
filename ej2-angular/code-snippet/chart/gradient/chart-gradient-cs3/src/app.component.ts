import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, CandleSeriesService, LineSeriesService, EmaIndicatorService, TooltipService, LegendService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { PriceSeries } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [DateTimeService, CandleSeriesService, LineSeriesService, EmaIndicatorService, TooltipService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [title]="title" [tooltip]="tooltip" [legendSettings]="legendSettings" [indicators]="indicators">
        <e-series-collection>
            <e-series [dataSource]="priceData" type="Candle" xName="Date" yName="y" low="Low" high="High" close="Close" open="Open" volume="Volume" name="Equity Price" [width]="2"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public priceData?: Object[];
    public indicatorGradient?: Object;
    public tooltip?: Object;
    public legendSettings?: Object;
    public title?: string;
	public indicators?: Object;
    ngOnInit(): void {
        this.priceData = PriceSeries;
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'DateTime',
            intervalType: 'Months',
            labelFormat: 'MMM yyyy',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            title: 'Price (USD)',
            labelFormat: '${value}',
            minimum: 90, maximum: 130,
            interval: 10,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        };
        this.indicatorGradient = {
            x1: 0, y1: 0,
            x2: 1, y2: 0,
            gradientColorStop: [
                { color: '#7C3AED', offset: 0, opacity: 1 },
                { color: '#F59E0B', offset: 100, opacity: 1 }
            ]
        };
		this.indicators=[
			{
				type: "Ema",
				field: "Close",
				seriesName: "Equity Price",
				xName: "Date",
				period: 3,
				linearGradient: this.indicatorGradient,
				width: 2
			}
		]
        this.tooltip = { enable: true };
        this.legendSettings = { visible: false };
        this.title = 'Equity Price - Jan-Nov 2025';
    }
}