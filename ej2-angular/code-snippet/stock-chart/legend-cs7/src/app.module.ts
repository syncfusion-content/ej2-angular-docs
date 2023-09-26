import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { StockLegendService, CandleSeries } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, LineSeriesService, StockLegendService, CandleSeries ]
})
export class AppModule { }