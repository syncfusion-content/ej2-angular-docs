import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { LegendService, DataLabelService, TooltipService, CrosshairService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, LineSeriesService, LegendService, DataLabelService,
                 TooltipService, CrosshairService]
})
export class AppModule { }