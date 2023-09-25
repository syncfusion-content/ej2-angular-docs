

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService, timezoneData } from '@syncfusion/ej2-angular-schedule';
import { timeZoneData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Day"></e-view> <e-view option="Week"></e-view> <e-view option="Month"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    public eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], timeZoneData, undefined, true)
    };
    public selectedDate: Date = new Date(2018, 1, 11);
    private timeZones:  { Text: string, Value: string }[] = [
        { Value: 'America/New_York', Text: '(UTC-05:00) Eastern Time' },
        { Value: 'UTC', Text: 'UTC' },
        { Value: 'Asia/Kolkata', Text: '(UTC+05:30) India Standard Time' }
    ];
    constructor() {
        timezoneData.splice(0, timezoneData.length, ...this.timeZones);
    }
}


