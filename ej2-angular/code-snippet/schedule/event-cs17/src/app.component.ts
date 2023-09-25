

import { Component, ViewChild } from '@angular/core';
import { scheduleData } from './datasource';
import {
    TimelineViewsService, TimelineMonthService, EventSettingsModel, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj height='550px' currentView="TimelineMonth" [selectedDate]="selectedDate" [eventSettings]="eventSettings">
    <e-views>
        <e-view option='TimelineWeek'></e-view>
        <e-view option='TimelineMonth'></e-view>
      </e-views>
  </ejs-schedule>`,
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
        enableMaxHeight: true,
        enableIndicator: false
    };
}


