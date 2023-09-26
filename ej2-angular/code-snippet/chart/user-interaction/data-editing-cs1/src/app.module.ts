import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, ColumnSeriesService, CategoryService, DataEditingService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { LegendService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ LegendService, LineSeriesService, ColumnSeriesService, CategoryService, DataEditingService, TooltipService]
})
export class AppModule { }