import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { series2 } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [crosshair]='crosshair' [tooltip]='tooltip'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Line' xName='x' yName='y'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public tooltip?: Object;
    public crosshair?: Object;
    ngOnInit(): void {
        this.chartData = series2;
        this.primaryXAxis = {
            valueType: 'DateTimeCategory',
            majorGridLines: { width: 0 },
            crosshairTooltip: { enable: true }
        };
        this.tooltip = { enable: true, header: 'AAPL Stock Price' };
        this.crosshair = { enable: true };
    }

}


