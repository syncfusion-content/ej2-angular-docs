

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { generateObject } from './datasource';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" [enableAllDayScroll]="enableAllDayScroll"></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2021, 3, 28);
    public eventSettings: EventSettingsModel = {
        dataSource: generateObject(),
    };
    public enableAllDayScroll?: true;
}


