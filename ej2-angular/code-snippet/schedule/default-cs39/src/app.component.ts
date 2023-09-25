

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" startHour='09:00' endHour='18:00'>
        <e-header-rows>
            <e-header-row option='Year'></e-header-row>
            <e-header-row option='Month'></e-header-row>
            <e-header-row option='Week'></e-header-row>
            <e-header-row option='Date'></e-header-row>
            <e-header-row option='Hour'></e-header-row>
        </e-header-rows>
        <e-views>
            <e-view option='TimelineWeek'></e-view>
        </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 11, 31);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


