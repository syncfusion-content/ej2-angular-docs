

import { Component } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { Calendar, Islamic } from '@syncfusion/ej2-angular-calendars';
import {
  ScheduleComponent, DayService, WeekService, MonthService, MonthAgendaService,
  AgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import * as localeObj from "./locale.json";
import * as numberingSystems from "./numberingSystems.json";
import * as ca_gregorian from "./ca-gregorian.json";
import * as numbers from "./numbers.json";
import * as timeZoneNames from "./timeZoneNames.json";
import * as ca_islamic from "./ca-islamic.json";

Calendar.Inject(Islamic);

L10n.load(localeObj);
loadCldr(numberingSystems, ca_gregorian, numbers, timeZoneNames, ca_islamic);

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' calendarMode='Islamic' locale='ar' [enableRtl]="enableRtl" showQuickInfo="false" [selectedDate]="selectedDate" [eventSettings]="eventSettings">
    <e-views>
    <e-view option='Day'></e-view>
      <e-view option='TimelineDay'></e-view>
      <e-view option='Week'></e-view>
      <e-view option='TimelineWeek'></e-view>
      <e-view option='Month'></e-view>
      <e-view option='TimelineMonth'></e-view>
      <e-view option='Agenda'></e-view>
      <e-view option='MonthAgenda'></e-view>
    </e-views>
  </ejs-schedule>`
})
export class AppComponent {
    public enableRtl: Boolean = true;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


