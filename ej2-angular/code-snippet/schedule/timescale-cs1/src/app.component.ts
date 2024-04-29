import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component } from '@angular/core';
import { EventSettingsModel, TimeScaleModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import { Internationalization } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],
standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  // specifies the template string for the Schedule component
  templateUrl: './app.component.html'
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public timeScale: TimeScaleModel = {
        enable: true,
        interval: 60,
        slotCount: 6,
        majorSlotTemplate: '#majorSlotTemplate',
        minorSlotTemplate: '#minorSlotTemplate'
    };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public instance: Internationalization = new Internationalization();
    getMajorTime(date: Date): string {
        return this.instance.formatDate(date, { skeleton: 'hm' });
    }
    getMinorTime(date: Date): string {
        return this.instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
    }
}


