import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, AreaSeriesService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { TooltipService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, AreaSeriesService, LineSeriesService, TooltipService ]
})
export class AppModule { }