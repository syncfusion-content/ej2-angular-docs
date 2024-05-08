import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent, WorkHoursModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<button ejs-button cssClass='e-info' (click)='workHour()'> Change the work hours </button>
  <ejs-schedule #scheduleObj width='100%' height='550px' [workHours]="workHours" [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public workHours: WorkHoursModel = { start: '9:00', end: '11:00' };
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    workHour(): void {
    let dates: Date[] = [new Date(2018, 1, 15), new Date(2018, 1, 17)];
    this.scheduleObj?.setWorkHours(dates, '11:00','20:00');
    }
}


