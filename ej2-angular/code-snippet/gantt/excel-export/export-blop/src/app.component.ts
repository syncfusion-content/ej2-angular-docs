
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttAllModule, GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ExcelExportCompleteArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  template: `
    <ejs-gantt #gantt id="ganttDefault" height="370px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
    [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)"(excelExportComplete)="excelExportComplete($event)" [allowExcelExport]="true" [treeColumnIndex]="1">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public toolbar: ToolbarItem[] = [];
  public columns: object[] = [];

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', width: '100' },
      { field: 'TaskName', headerText: 'Task Name', width: '150' },
      { field: 'StartDate', headerText: 'Start Date', width: '150', visible: false },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' },
    ];
    this.toolbar = ['ExcelExport', 'CsvExport'];
  }
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_excelexport') {

      this.ganttInstance!.excelExport(undefined, undefined, undefined, true);
    }
    if (args.item.id === 'ganttDefault_csvexport') {
      this.ganttInstance.csvExport(undefined, undefined, undefined, true);
    }
  }

  public excelExportComplete(args: ExcelExportCompleteArgs): void {
    if (args && args.promise) {
      // execute the promise to get the blob data.
      args.promise.then((e: { blobData: Blob }) => {
        this.exportBlob(e.blobData);
      });
    }
  }

  public exportBlob = (blob: Blob) => {
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const url: string = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Export';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}


