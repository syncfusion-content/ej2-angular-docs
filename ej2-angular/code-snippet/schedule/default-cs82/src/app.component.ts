

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='TimelineWorkWeek' dateFormat='dd-MMM-yyyy' [interval]="viewInterval" [workDays]="workweekDays"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 14);
    public viewInterval: number = 3;
    public workweekDays: number[] = [1, 3, 5];
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


