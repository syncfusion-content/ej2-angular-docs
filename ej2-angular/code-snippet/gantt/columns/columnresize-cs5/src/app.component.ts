import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, ResizeService, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ResizeArgs, Column } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ResizeService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-left: 180px;">
      <p style="color: red;" id="message">{{ message }}</p>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [allowResizing]="true" (resizeStart)="resizeStart($event)" (resizing)="resizing($event)" (resizeStop)="resizeStop($event)">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styles: [` 
    .e-gantt .e-headercell.customcss , .e-gantt .e-rowcell.customcss {
      background-color: rgb(43, 195, 226);
    }`
  ]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public message?: string;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public resizeStart(args: ResizeArgs): void {
    const field = (args.column as Column).field;
    this.message = `resizeStart event triggered and cancelled for ${field}`;
    if (field === 'TaskID') {
      args.cancel = true;
    }
  }

  public resizing(args: ResizeArgs): void {
    const field = (args.column as Column).field;
    this.message = `resizing event triggered and cancelled for ${field}`;
    if (field === 'Duration') {
      args.cancel = true;
    }
  }

  public resizeStop(args: ResizeArgs): void {
    this.message = `resizeStop event triggered`;
    const field = (args.column as Column).field;
    const index = (args.column as Column).index;
    const headerCell = this.gantt?.treeGrid.getColumnHeaderByField(field);
    if (headerCell) {
      headerCell.classList.add('customcss');
    }
    const columnCells = this.gantt?.treeGrid
      .getContentTable()
      .querySelectorAll(`[data-colindex="${index}"]`);
    columnCells?.forEach((cell: Element) => {
      (cell as HTMLElement).style.backgroundColor = 'rgb(43, 195, 226)';
    });
  }
}