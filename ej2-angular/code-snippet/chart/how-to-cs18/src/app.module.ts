import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService } from '@syncfusion/ej2-angular-grids';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import {
    LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, ChartAllModule, AccumulationChartAllModule, AccumulationChartModule, GridModule, DialogModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [LineSeriesService, DateTimeService, ColumnSeriesService, DataLabelService, ZoomService, StackingColumnSeriesService, CategoryService,
        StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
        PieSeriesService, AccumulationTooltipService, ScrollBarService, AccumulationDataLabelService, SelectionService, ScatterSeriesService,
        PageService, AreaSeriesService, RangeAreaSeriesService ]
})
export class AppModule { }