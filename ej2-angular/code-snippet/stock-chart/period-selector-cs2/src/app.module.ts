import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, PeriodSelectorService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ AreaSeriesService, DateTimeService, PeriodSelectorService ]
})
export class AppModule { }