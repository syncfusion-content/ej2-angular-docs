

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, TimeScaleModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView="Day" [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='Day' startHour='09:30' endHour='18:00' [timeScale]="timeScaleOptions"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public timeScaleOptions: TimeScaleModel = { enable: true, slotCount: 5 };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


