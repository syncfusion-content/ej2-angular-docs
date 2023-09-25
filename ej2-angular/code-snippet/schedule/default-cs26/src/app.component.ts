

import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [minDate]='minDate' [maxDate]='maxDate' [currentView]='currentView' [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 17);
  public minDate: Date = new Date(2017, 4, 17);
  public maxDate: Date = new Date(2018, 8, 17);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public currentView: View = 'Month';
}



