import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {GanttModule, GanttComponent, ToolbarItem, ToolbarService, ExcelExportService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Column, ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
    imports: [ GanttModule],
    providers: [ToolbarService, ExcelExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
  template: `
    <ejs-gantt #gantt id="ganttDefault" height="450px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" allowExcelExport="true" (toolbarClick)="toolbarClick($event)" (queryCellInfo)="queryCellInfoEvent($event)" (excelQueryCellInfo)="excelQueryCellInfo($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.toolbar = ['ExcelExport'];
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      this.ganttInstance?.excelExport();
    } else if (args.item.id === 'ganttDefault_csvexport') {
      this.ganttInstance?.csvExport();
    }
  }

  public queryCellInfoEvent(args:  ExcelQueryCellInfoEventArgs): void {
    const data = args.data as GanttTask;
    if (data.TaskID === 4 && args.column.field === 'TaskName') {
      (args as any).rowSpan = 2;
    }
    if (data.TaskID === 6 && args.column.field === 'TaskName') {
      args.colSpan = 2;
    }
  }

  public excelQueryCellInfo(args: QueryCellInfoEventArgs): void {
    const data = args.data as GanttTask;
    if (data.TaskID === 4 && (args.column as Column).field === 'TaskName') {
      args.rowSpan = 2;
    }
    if (data.TaskID === 6 && (args.column as Column).field === 'TaskName') {
      args.colSpan = 2;
    }
  }
}

interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  ParentID?: number;
}
