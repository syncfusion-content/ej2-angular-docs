

import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [currentView]='currentView' [eventSettings]='eventSettings' [allowInline]="allowInline"
></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2019, 0, 17);
  public allowInline: boolean = true;
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public currentView: View = 'Month';
}



