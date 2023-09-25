

import { Component } from '@angular/core';
import { EventSettingsModel, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WorkWeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='WorkWeek' [workDays]="workWeekDays"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public workWeekDays: number[]= [2, 3, 5];
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


