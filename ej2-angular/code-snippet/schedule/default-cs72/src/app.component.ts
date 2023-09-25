

import { Component } from '@angular/core';
import { EventSettingsModel, WeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='Week' dateFormat='dd-MMM-yyyy'></e-view>
        <e-view option='Month' [showWeekend]="showWeekend" [readonly]="isReadOnly"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public showWeekend: Boolean = true;
    public isReadOnly: number = 3;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


