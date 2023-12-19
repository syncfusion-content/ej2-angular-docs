import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule} from '@syncfusion/ej2-angular-charts';
import { DateTimeService, StepLineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { LegendService, TooltipService, CategoryService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ DateTimeService, StepLineSeriesService, LegendService, TooltipService, CategoryService, ColumnSeriesService]
})
export class AppModule { }