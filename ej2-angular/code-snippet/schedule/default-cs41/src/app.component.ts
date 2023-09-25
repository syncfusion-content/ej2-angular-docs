

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService, TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings">
        <e-header-rows>
            <e-header-row option='Week'></e-header-row>
            <e-header-row option='Date'></e-header-row>
            <e-header-row option='Hour'></e-header-row>
        </e-header-rows>
        <e-views>
            <e-view option='TimelineMonth' [interval]="monthInterval"></e-view>
            <e-view option='TimelineWeek' [interval]="weekInterval"></e-view>
            <e-view option='TimelineDay' [interval]="dayInterval"></e-view>
        </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public monthInterval: Boolean | Number = 24;
    public weekInterval: Boolean | Number = 3;
    public dayInterval: Boolean | Number = 4;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


