import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, LineSeriesService, AtrIndicatorService, DateTimeService, CrosshairService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ CandleSeriesService, LineSeriesService, AtrIndicatorService, DateTimeService, CrosshairService]
})
export class AppModule { }