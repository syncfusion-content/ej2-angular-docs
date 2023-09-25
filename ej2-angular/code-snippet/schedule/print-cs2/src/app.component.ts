

import { ItemModel } from '@syncfusion/ej2-angular-navigations';
import { ScheduleComponent, EventSettingsModel, ActionEventArgs, ToolbarActionArgs, View, PrintService,
  DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleModel } from '@syncfusion/ej2-angular-schedule';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, PrintService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj id="schedule" cssClass='schedule-print' width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)"></ejs-schedule>`
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };

  public onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      const exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-print',
        text: 'Print', cssClass: 'e-print', click: this.onPrintIconClick.bind(this)
      };
      args.items!.push(exportItem);
    }
  }

  public onPrintIconClick(): void {
    let printModel: ScheduleModel = {
      agendaDaysCount: 14,
      cssClass: 'e-print-schedule',
      currentView: this.scheduleObj?.currentView,
      dateFormat: 'dd-MMM-yyyy',
      enableRtl: false,
      endHour: '18:00',
      firstDayOfWeek: 1,
      firstMonthOfYear: 0,
      group: {},
      height: 'auto',
      locale: this.scheduleObj?.locale,
      maxDate: this.scheduleObj?.selectedDate,
      minDate: this.scheduleObj?.getCurrentViewDates()[0],
      readonly: true,
      resources: [],
      rowAutoHeight: false,
      selectedDate: new Date(),
      showHeaderBar: false,
      showTimeIndicator: false,
      showWeekNumber: false,
      showWeekend: false,
      startHour: '06:00',
      timeFormat: 'HH',
      timeScale: { enable: true },
      width: 'auto',
      workDays: [1, 2, 3, 4, 5],
      workHours: { highlight: true, start: '10:00', end: '20:00' }
    };
    this.scheduleObj?.print(printModel);
  }
 }


