import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ToolbarService, ExcelExportService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data'; // Replace with your actual data

@Component({
  imports: [GanttModule],
  providers: [ToolbarService, ExcelExportService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt #gantt id="ganttDefault" height="450px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" allowExcelExport="true" (toolbarClick)="toolbarClick($event)" (excelExportComplete)='excelExportComplete($event)' >
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

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {
      (this.ganttInstance as GanttComponent).showSpinner();
      setTimeout(() => {
        this.ganttInstance?.excelExport();
      }, 2000); // 2-second delay to observe spinner.

    }
  }

  public excelExportComplete(args: ExcelExportCompleteArgs): void {
    (this.ganttInstance as GanttComponent).hideSpinner();
  }
}
