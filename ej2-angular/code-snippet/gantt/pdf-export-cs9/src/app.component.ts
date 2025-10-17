import { Component, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, ToolbarService, ToolbarItem, PdfExportService, SelectionService, PdfQueryCellInfoEventArgs, Column, PdfGanttCellStyle } from '@syncfusion/ej2-angular-gantt'
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ToolbarService, PdfExportService, SelectionService],
  template: `
    <ejs-gantt #gantt id="ganttChart" height="430px" [dataSource]="taskData" [taskFields]="taskFields" [toolbar]="toolbar" 
    allowPdfExport='true'  [treeColumnIndex]="1" (toolbarClick)="toolbarClick($event)" (pdfQueryCellInfo)="pdfQueryCellInfo($event)">
    </ejs-gantt>`,
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public taskData?: object;
  public taskFields?: object;
  public toolbar?: ToolbarItem[];
  public columns?: object[];

  ngOnInit(): void {
    this.taskData = editingData;
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID',
    };
    this.columns = [
      { field: 'TaskID' },
      { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
      { field: 'StartDate' },
      { field: 'Duration' }
    ];
    this.toolbar = ['PdfExport'];
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttChart_pdfexport') {
      this.ganttInstance?.pdfExport();
    }
  }

  public pdfQueryCellInfo(args: PdfQueryCellInfoEventArgs): void {
    if ((args.column as Column).field == 'Progress') {
      if ((args.value as number) < 50) {
        (args.style as PdfGanttCellStyle).backgroundColor = new PdfColor(240, 128, 128);
      } else {
        (args.style as PdfGanttCellStyle).backgroundColor = new PdfColor(165, 105, 189);
      }
    }
  }
}