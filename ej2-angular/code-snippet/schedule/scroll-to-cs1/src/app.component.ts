

import { Component, ViewChild } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-calendars';
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService],
  // specifies the template string for the Schedule component
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public scrollToHour: Date = new Date(2018, 1, 15, 9);
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  onChange(args: ChangeEventArgs): void {
    this.scheduleObj!.scrollTo((args as any).text);
  }
 }


