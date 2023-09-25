

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView="Day" [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
  <e-views>
        <e-view displayName='3 Days' option='Day' [interval]="dayInterval"></e-view>
        <e-view displayName='2 Weeks' option='Week' [isSelected]="isSelected" [interval]="weekInterval"></e-view>
  </e-views> </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public isSelected: Boolean = true;
    public dayInterval: number = 3;
    public weekInterval: number = 2;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


