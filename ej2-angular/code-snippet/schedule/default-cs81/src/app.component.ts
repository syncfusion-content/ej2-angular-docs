

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineViewsService, TimeScaleModel } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='TimelineWeek' timeScale="timeScaleOptions"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public timeScaleOptions: TimeScaleModel = { enable: false };
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


