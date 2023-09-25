

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings">
        <e-header-rows>
            <e-header-row option='Month'></e-header-row>
            <e-header-row option='Date'></e-header-row>
        </e-header-rows>
        <e-views>
            <e-view option='TimelineMonth' [interval]="viewInterval"></e-view>
        </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 0, 1);
    public viewInterval: Boolean | Number = 12;
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


