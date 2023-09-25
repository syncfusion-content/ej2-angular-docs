

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [enableRtl]='enableRtl'
  [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public enableRtl: boolean = true;
    public views: Array<string> = ['Day', 'Week', 'WorkWeek'];
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


