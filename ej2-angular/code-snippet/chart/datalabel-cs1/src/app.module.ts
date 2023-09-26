import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, DateTimeService, DataLabelService,StackingColumnSeriesService,CategoryService, ChartShape,
       StepAreaSeriesService,ChartAnnotationService, LegendService, TooltipService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService,CategoryService,
               StepAreaSeriesService,ChartAnnotationService, LegendService, TooltipService]
})
export class AppModule { }