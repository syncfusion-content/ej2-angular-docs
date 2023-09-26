import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, StepLineSeriesService, LineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { LegendService, TooltipService, RangeTooltipService, CategoryService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, LineSeriesService, RangeTooltipService, StepLineSeriesService, LegendService, TooltipService, CategoryService, ColumnSeriesService]
})
export class AppModule { }