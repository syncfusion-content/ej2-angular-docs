

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService, View ,WeekRule} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView='Month' [views]="scheduleViews" [showWeekNumber]="showWeekNumber" [weekRule]="weekRule" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2020, 1, 15);
  public workWeekDays: number[] = [1, 3, 4, 5];
  public showWeekNumber: boolean = true;
  public weekRule: WeekRule = 'FirstFourDayWeek';
  public scheduleViews: View[] = ['Day', 'Week', 'Month'];
  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Explosion of Betelgeuse Star",
        StartTime: new Date(2020, 1, 15, 9, 30),
        EndTime: new Date(2020, 1, 15, 11, 0)
      },
      {
        Id: 2,
        Subject: "Thule Air Crash Report",
        StartTime: new Date(2020, 1, 12, 12, 0),
        EndTime: new Date(2020, 1, 12, 14, 0)
      },
      {
        Id: 3,
        Subject: "Blue Moon Eclipse",
        StartTime: new Date(2020, 1, 13, 9, 30),
        EndTime: new Date(2020, 1, 13, 11, 0)
      },
      {
        Id: 4,
        Subject: "Meteor Showers in 2018",
        StartTime: new Date(2020, 1, 14, 13, 0),
        EndTime: new Date(2020, 1, 14, 14, 30)
      }
    ]
  }
}


