

import { Component } from '@angular/core';
import { EventSettingsModel, TimeScaleModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [eventSettings]="eventSettings"  [showTimeIndicator]="showTimeIndicator" > </ejs-schedule>`
})
export class AppComponent {
    public showTimeIndicator: boolean = true;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


