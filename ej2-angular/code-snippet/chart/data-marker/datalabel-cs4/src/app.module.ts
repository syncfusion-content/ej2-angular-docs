import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, CategoryService, LineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { LegendService, DataLabelService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ], 
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, LineSeriesService, LegendService, DataLabelService, ColumnSeriesService, CategoryService ]
})
export class AppModule { }