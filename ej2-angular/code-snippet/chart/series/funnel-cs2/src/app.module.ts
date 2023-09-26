import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { FunnelSeriesService, AccumulationTooltipService, CategoryService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, AccumulationChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FunnelSeriesService, AccumulationTooltipService, CategoryService, AccumulationDataLabelService ]
})
export class AppModule { }