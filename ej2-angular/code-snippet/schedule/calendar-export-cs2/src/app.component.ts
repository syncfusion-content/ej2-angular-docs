

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, View, DayService, DragAndDropService,
  WeekService, WorkWeekService, MonthService, AgendaService, ICalendarExportService, ICalendarImportService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService,
    ICalendarExportService, ICalendarImportService, DragAndDropService],
  // specifies the template string for the Schedule component
  template: `<button ejs-button id="ics-export" type="button" (click)="onExportClick()">Export</button>
<ejs-schedule #scheduleObj width='100%' height='550px' [views]="scheduleViews" [selectedDate]="selectedDate" [eventSettings]="eventSettings" [currentView]="currentView" >
  <e-views><e-view option='Week' ></e-view></e-views></ejs-schedule>`
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public currentView: View = 'Week';

  public onExportClick=(): void =>{
    this.scheduleObj?.exportToICalendar('ScheduleEvents');
  }
 }


