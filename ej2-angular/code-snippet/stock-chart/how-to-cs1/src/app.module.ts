import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StockChartModule, DateTimeService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, StockChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, CandleSeriesService ]
})
export class AppModule { }