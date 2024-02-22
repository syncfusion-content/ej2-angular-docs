import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule, View, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ScheduleModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [View, DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class AppModule { }