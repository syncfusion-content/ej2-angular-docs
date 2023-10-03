import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, ChartAllModule, AccumulationChartModule  } from '@syncfusion/ej2-angular-charts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, ILoadedEventArgs, SplineSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, ButtonModule, ChartAllModule, AccumulationChartModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService]
})
export class AppModule { }