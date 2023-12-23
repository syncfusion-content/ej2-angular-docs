import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MonthService, TimelineMonthService, TimelineYearService} from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ScheduleModule,
        TimePickerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [TimelineMonthService, MonthService, TimelineYearService]
})
export class AppModule { }