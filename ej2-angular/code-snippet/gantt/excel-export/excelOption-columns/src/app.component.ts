import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, ToolbarItem, ExcelExportService, GanttAllModule, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { Column, ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  providers: [ExcelExportService, ToolbarService],
  template: `
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" allowExcelExport="true" [treeColumnIndex]="1">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];

  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.toolbar = ['ExcelExport', 'CsvExport'];
  }


  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      const exportColumns: Partial<Column>[] = [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Project Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
      ];
      const excelExportProperties: ExcelExportProperties = {
        columns: exportColumns as Column[]
      };
      (this.ganttInstance as GanttComponent).excelExport(excelExportProperties);
    }
  }

}
