import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccumulationChartModule, ExportService } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, AccumulationChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PieSeriesService, AccumulationDataLabelService, ExportService]
})
export class AppModule { }