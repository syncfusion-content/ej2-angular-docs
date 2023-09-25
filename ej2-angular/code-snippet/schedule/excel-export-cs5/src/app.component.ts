

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ScheduleComponent, EventSettingsModel, WeekService, View, ActionEventArgs, ToolbarActionArgs, ExportOptions,
  ExportFieldInfo, ExcelExportService
} from '@syncfusion/ej2-angular-schedule';
import { ItemModel } from '@syncfusion/ej2-angular-navigations';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [WeekService, ExcelExportService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [views]="scheduleViews" [selectedDate]="selectedDate" cssClass='schedule-excel-export'  [eventSettings]="eventSettings" [currentView]="currentView" (actionBegin)="onActionBegin($event)">
  <e-views><e-view option='Week'></e-view></e-views></ejs-schedule>`,
  styleUrls: ['./index.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2019, 0, 10);
  public scheduleViews: View[] = ['Week'];
  public currentView: View = 'Week';
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      const exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
      };
      args.items?.push(exportItem);
    }
  }

  public onExportClick(): void {
    const customFields: ExportFieldInfo[] = [
        { name: 'Subject', text: 'Summary' },
        { name: 'StartTime', text: 'First Date' },
        { name: 'EndTime', text: 'Last Date' },
        { name: 'Location', text: 'Place' },
        { name: 'OwnerId', text: 'Owners' }
    ];
    const exportValues: ExportOptions = { fieldsInfo: customFields };
    this.scheduleObj?.exportToExcel(exportValues);
  }
 }


