import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ExcelExportEventArgs,
  ScheduleModule,
} from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ScheduleComponent,
  EventSettingsModel,
  View,
  ActionEventArgs,
  ToolbarActionArgs,
  ExportOptions,
  ExcelExportService,
} from '@syncfusion/ej2-angular-schedule';
import { ItemModel } from '@syncfusion/ej2-angular-navigations';
import { scheduleData } from './datasource';

@Component({
  imports: [ScheduleModule, ButtonModule],

  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    ExcelExportService,
  ],
  standalone: true,
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [views]="scheduleViews" cssClass='schedule-excel-export' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [currentView]="currentView" (actionBegin)="onActionBegin($event)" (excelExport)="onExcelExport($event)">
  <e-views><e-view option='Week' ></e-view></e-views></ejs-schedule>`,
  styleUrls: ['./index.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2025, 0, 10);
  public scheduleViews: View[] = ['Week', 'Month'];
  public currentView: View = 'Week';
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      const exportItem: ItemModel = {
        align: 'Right',
        showTextOn: 'Both',
        prefixIcon: 'e-icon-schedule-excel-export',
        text: 'CSV-Export',
        cssClass: 'e-excel-export',
        click: this.onExportClick.bind(this),
      };
      args.items?.push(exportItem);
    }
  }
  public onExcelExport(args: ExcelExportEventArgs): void {
    const worksheet = args.worksheets[0];
    worksheet.rows.unshift({
      index: 1,
      cells: [
        {
          index: 1,
          value: 'Sales Report',
          colSpan: worksheet.columns.length,
          style: {
            bold: true,
            fontSize: 18,
            hAlign: 'Center',
            fill: { color: '#1E90FF' },
            color: '#FFFFFF',
          },
        },
      ],
    });
    worksheet.rows.unshift({
      index: 2,
      cells: [
        {
          index: 1,
          value: 'Generated on: ' + new Date().toLocaleDateString(),
          colSpan: worksheet.columns.length,
          style: {
            italic: true,
            fontSize: 12,
            hAlign: 'Left',
            fill: { color: '#D3D3D3' },
          },
        },
      ],
    });
    worksheet.rows.forEach((row: any, idx: number) => {
      row.index = idx + 1;
    });
    worksheet.rows.push({
      index: worksheet.rows.length + 1,
      cells: [
        {
          index: 1,
          value: 'End of Report',
          colSpan: worksheet.columns.length,
          style: {
            bold: true,
            fontSize: 14,
            hAlign: 'Center',
            fill: { color: '#FFD700' },
          },
        },
      ],
    });
  }
  public onExportClick(): void {
    const exportFields = [
      { name: 'Id', text: 'Id' },
      { name: 'Subject', text: 'Summary' },
      { name: 'StartTime', text: 'Start Date' },
      { name: 'EndTime', text: 'End Date' },
      { name: 'Location', text: 'Place' },
    ];
    const exportValues: ExportOptions = { fieldsInfo: exportFields };
    this.scheduleObj?.exportToExcel(exportValues);
  }
}
