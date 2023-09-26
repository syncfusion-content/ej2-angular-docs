import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule} from '@syncfusion/ej2-angular-charts';
import { LegendService, TooltipService, DataLabelService, ColumnSeriesService, DateTimeService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ LegendService, TooltipService, DataLabelService, ColumnSeriesService, DateTimeService]
})
export class AppModule { }