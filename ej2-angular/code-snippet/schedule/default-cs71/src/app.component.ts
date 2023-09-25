

import { Component } from '@angular/core';
import { EventSettingsModel, WeekService, TimelineViewsService, MonthService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, TimelineViewsService, MonthService, TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='TimelineDay'></e-view>
        <e-view option='Week'></e-view>
        <e-view option='Month'></e-view>
        <e-view option='TimelineMonth'></e-view>
      </e-views>
  </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


