

import { Component, ViewEncapsulation } from '@angular/core';
import { scheduleData } from './datasource';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService
} from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj cssClass='custom-class' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings"></ejs-schedule>`,
    styles: [`.custom-class.e-schedule .e-vertical-view .e-all-day-appointment-wrapper .e-appointment,
  .custom-class.e-schedule .e-vertical-view .e-day-wrapper .e-appointment,
  .custom-class.e-schedule .e-month-view .e-appointment{
    background: #006400;
  }`],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
}


