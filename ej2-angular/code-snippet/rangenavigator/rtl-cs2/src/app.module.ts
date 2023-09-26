import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, RangeNavigatorModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ AreaSeriesService, DateTimeService ]
})
export class AppModule { }