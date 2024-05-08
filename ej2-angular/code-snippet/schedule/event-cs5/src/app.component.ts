import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import {  MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { scheduleData } from './datasource';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService,
    MonthService, AgendaService, ResizeService, ResizeEventArgs
} from '@syncfusion/ej2-angular-schedule';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService,
                ResizeService],
standalone: true,
    selector: 'app-root',
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" (resizeStart)="onResizeStart($event)"></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
    onResizeStart(event: ResizeEventArgs): void {
        event.scroll = { enable: true, scrollBy: 15, timeDelay: 500 };
    }
}


