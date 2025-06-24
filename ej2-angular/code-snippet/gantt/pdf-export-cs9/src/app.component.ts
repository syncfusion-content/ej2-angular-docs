import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ToolbarItem } from '@syncfusion/ej2-gantt';
import { editingData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ToolbarService, PdfExportService, SelectionService],
  template: `
    <ejs-gantt
      #gantt
      id="ganttChart"
      height="430px"
      [dataSource]="taskData"
      [taskFields]="taskFields"
      [toolbar]="toolbar" 
      allowPdfExport='true' 
      [treeColumnIndex]="1"
      (toolbarClick)="toolbarClick($event)"
      (pdfQueryCellInfo)="pdfQueryCellInfo($event)"
      >
    </ejs-gantt>
  `,
})
export class AppComponent {
  public taskData?: object;
  public taskFields?: object;
  public toolbar?: ToolbarItem[];
  public columns?: object[];
  @ViewChild('gantt', {static: true})
  public ganttRef?: GanttComponent;
  ngOnInit(): void {
    this.taskData = editingData;
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID:'ParentID',
    };
    this.columns = [
      { field: 'TaskID' },
      { field: 'TaskName', headerText: 'Task Name', width: '250', clipMode: 'EllipsisWithTooltip' },
      { field: 'StartDate' },
      { field: 'Duration' }
  ];
  this.toolbar =  ['PdfExport'];
  }
  public toolbarClick(args: any): void {
    if (args.item.id === 'ganttChart_pdfexport') {
      this.ganttRef?.pdfExport();
    }
  }
  public pdfQueryCellInfo(args: any): void {
    if(args.column.field == 'Progress'){
      if(args.value < 50) {
        args.style.backgroundColor = new PdfColor(240, 128, 128);
      } else {
        args.style.backgroundColor = new PdfColor(165, 105, 189);
      }
    }
  }
}