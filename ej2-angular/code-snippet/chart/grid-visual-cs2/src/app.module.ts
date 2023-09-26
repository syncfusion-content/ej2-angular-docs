import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService  } from '@syncfusion/ej2-angular-grids';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, DateTimeService, DataLabelService,StackingColumnSeriesService,CategoryService, ChartShape,
       StepAreaSeriesService,SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
       SelectionService,ScatterSeriesService
    } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, AccumulationChartModule, GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService,CategoryService,
               StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
               PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService, SelectionService,ScatterSeriesService
               ,PageService]
})
export class AppModule { }