

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, View, WorkHoursModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [views]="scheduleViews" startHour='07:00' endHour='18:00' [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


