import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService, LegendService, DataLabelService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, StockChartAllModule, ChartAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ CategoryService, ColumnSeriesService, LegendService, DataLabelService]
})
export class AppModule { }