import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, SplineSeriesService, StepLineSeriesService, CategoryService, ParetoSeriesService, ColumnSeriesService,
       SplineAreaSeriesService, MultiColoredLineSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ LineSeriesService, SplineSeriesService, StepLineSeriesService, CategoryService, SplineAreaSeriesService, ParetoSeriesService, ColumnSeriesService,
               MultiColoredLineSeriesService, TooltipService ]
})
export class AppModule { }