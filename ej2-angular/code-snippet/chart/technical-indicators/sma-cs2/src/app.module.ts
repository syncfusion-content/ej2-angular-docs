import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CandleSeriesService, LineSeriesService, SmaIndicatorService, DateTimeService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ CandleSeriesService, LineSeriesService, SmaIndicatorService, DateTimeService]
})
export class AppModule { }