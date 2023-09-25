

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, TimeScaleModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView="Week" [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='Day' [interval]="viewInterval" displayName='2 Days' startHour='09:30' endHour='18:00' [timeScale]="timeScaleOptions"></e-view>
        <e-view option='Week' [interval]="viewInterval" displayName='2 Weeks' [showWeekend]="showWeekend" [isSelected]="isSelected"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public viewInterval: number= 2;
    public showWeekend: boolean = false;
    public isSelected: boolean = true;
    public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 5 };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


