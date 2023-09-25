

import { Component } from '@angular/core';
import { EventSettingsModel, YearService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [YearService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='Year' [showWeekNumber]="showWeekNumber" [readonly]="isReadOnly"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public showWeekNumber: boolean = true;
    public isReadOnly: boolean = true;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


