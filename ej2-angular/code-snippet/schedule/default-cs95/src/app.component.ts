

import { Component } from '@angular/core';
import { EventSettingsModel, WeekService, TimelineMonthService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [views]="scheduleViews" [firstDayOfWeek]="weekFirstDay" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public weekFirstDay: number = 3;
  public scheduleViews: View[] = ['Week', 'TimelineMonth'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


