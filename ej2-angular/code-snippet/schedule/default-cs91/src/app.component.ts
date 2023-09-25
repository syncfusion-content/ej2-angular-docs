

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView='Month' [views]="scheduleViews" [showWeekNumber]="showWeekNumber" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public workWeekDays: number[] = [1, 3, 4, 5];
  public showWeekNumber: boolean = true;
  public scheduleViews: View[] = ['Day', 'Week', 'Month'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


