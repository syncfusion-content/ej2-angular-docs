import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { Calendar, Islamic } from '@syncfusion/ej2-angular-calendars';
import {
  ScheduleComponent, DayService, WeekService, MonthService, MonthAgendaService,
  AgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel, WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import * as localeObj from './locale.json';
import arNumberData from '@syncfusion/ej2-cldr-data/main/ar/numbers.json';
import artimeZoneData from '@syncfusion/ej2-cldr-data/main/ar/timeZoneNames.json';
import arGregorian from '@syncfusion/ej2-cldr-data/main/ar/ca-gregorian.json';
import arIslamic from '@syncfusion/ej2-cldr-data/main/ar/ca-islamic.json';
import arNumberingSystem from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

Calendar.Inject(Islamic);

L10n.load(localeObj);
loadCldr(arNumberData, artimeZoneData, arGregorian, arIslamic, arNumberingSystem);

@Component({
imports: [
        
        ScheduleModule
    ],
standalone: true,
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


