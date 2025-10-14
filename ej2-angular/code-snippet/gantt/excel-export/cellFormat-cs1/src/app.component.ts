import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ToolbarService, ExcelExportService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, ToolbarItem, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Column, ExcelQueryCellInfoEventArgs, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { editingData } from './data';

@Component({
  imports: [GanttModule],
  providers: [ToolbarService, ExcelExportService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" (queryCellInfo)='queryCellInfo($event)' (excelQueryCellInfo)='excelQueryCellInfo($event)' (queryTaskbarInfo)='queryTaskbarInfo($event)' allowExcelExport='true' [treeColumnIndex]="1" [columns]="columns" [labelSettings]="labelSettings" [splitterSettings] = "splitterSettings"></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];
  public columns?: object[];
  public labelSettings?: object;
  public splitterSettings?: object;

  public ngOnInit(): void {
    this.data = editingData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.toolbar = ['ExcelExport'];
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100', visible: false },
      { field: 'TaskName', headerText: 'Task Name', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' }
    ];
    this.labelSettings = {
      taskLabel: '${Progress}%'
    };
    this.splitterSettings = {
      columnIndex: 3
    };
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      this.ganttInstance!.excelExport();
    }
  };
  public excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs): void {
    if (args.column.field === 'Progress') {
      const progressValue = args.value as number;
      if (progressValue > 80) {
        args.style = { backColor: '#A569BD' };
      } else if (progressValue < 20) {
        args.style = { backColor: '#F08080' };
      }
    }
  }

  public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
    const progress = (args.data as { Progress: number }).Progress;
    if (progress > 80) {
      args.progressBarBgColor = "#6C3483";
      args.taskbarBgColor = args.taskbarBorderColor = "#A569BD";
    } else if (progress < 20) {
      args.progressBarBgColor = "#CD5C5C";
      args.taskbarBgColor = args.taskbarBorderColor = "#F08080";
    }
  }

  public queryCellInfo(args: QueryCellInfoEventArgs): void {
    if ((args.column as Column).field === 'Progress') {
      const progress = (args.data as { Progress: number }).Progress;
      if (progress > 80) {
        (args.cell as HTMLElement).style.backgroundColor = '#A569BD';
      } else if (progress < 20) {
        (args.cell as HTMLElement).style.backgroundColor = '#F08080';
      }
    }
  }

}