import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartAllModule, StockChartModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, LineSeriesService, SplineSeriesService, DateTimeService, TooltipService, CrosshairService,
    IBeforeIndicatorChangeEventArgs, IIndicatorChangedEventArgs } from '@syncfusion/ej2-angular-charts';


    
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { chartData } from './datasource';

@Component({
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    imports: [ChartAllModule, StockChartModule],
    providers: [CandleSeriesService, LineSeriesService, SplineSeriesService, DateTimeService, TooltipService, CrosshairService],
    standalone: true,
    template: `
        <ejs-stockchart id="chartcontainer" [title]="title" [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" [crosshair]="crosshair"
        (beforeIndicatorChange)="beforeIndicatorChange($event)" (indicatorChanged)="indicatorChanged($event)">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]="stockData" type="Candle" xName="date" open="open" high="high" low="low" close="close" 
            volume="volume" name="Apple Inc">
            </e-stockchart-series>
        </e-stockchart-series-collection>
        </ejs-stockchart>
    `
})
export class AppComponent implements OnInit {
    public title?: string;
    public primaryXAxis?: Object;
    public stockData?: Object[];
    public tooltip?: Object;
    public crosshair?: Object;
  
    ngOnInit(): void {
        this.stockData = chartData;
        this.title = 'AAPL Stock Price';
        this.primaryXAxis = {
        valueType: 'DateTime',
        };
        this.tooltip = { enable: true };
        this.crosshair = { enable: true };
    }

    public beforeIndicatorChange(args: IBeforeIndicatorChangeEventArgs): void {
        console.log('Before Indicator Change:', args.type);
        // Prevent EMA indicator
        if (args.type === 'Ema') {
           args.cancel = true;
        }
    }
    public indicatorChanged(args: IIndicatorChangedEventArgs): void {
        console.log(`${args.type} indicator ${args.isAdd ? 'added' : 'removed'}`);
    }
}