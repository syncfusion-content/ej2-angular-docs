import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, CandleSeriesService, LegendService, CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { TooltipService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ TooltipService, DateTimeService, CandleSeriesService, LegendService, CategoryService, LineSeriesService]
})
export class AppModule { }