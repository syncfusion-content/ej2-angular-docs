

import { Component } from '@angular/core';
import { EventSettingsModel, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData} from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, WorkWeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='650px' height='550px' [selectedDate]='selectedDate' [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
 }


