import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, AreaSeriesService, SplineSeriesService } from '@syncfusion/ej2-angular-charts';
import { CrosshairService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, AreaSeriesService, SplineSeriesService, CrosshairService]
})
export class AppModule { }