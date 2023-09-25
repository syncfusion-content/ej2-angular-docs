

import { Component } from '@angular/core';
import { EventSettingsModel, WeekService, WorkWeekService, MonthService, TimelineViewsService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, WorkWeekService, MonthService, TimelineViewsService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView='WorkWeek' [views]="scheduleViews" [workDays]='workWeekDays' [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public workWeekDays: number[] = [1, 3, 5];
  public scheduleViews: View[] = ['Week', 'WorkWeek', 'Month', 'TimelineWeek', 'TimelineWorkWeek'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


