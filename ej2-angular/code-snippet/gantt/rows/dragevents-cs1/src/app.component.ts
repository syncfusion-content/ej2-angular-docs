import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [RowDDService, EditService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-left: 180px;">
      <p style="color: red;" id="message">{{ message }}</p>
    </div>
    <ejs-gantt height="450px" [dataSource]="data" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowRowDragAndDrop]="true" (rowDragStartHelper)="rowDragStartHelper($event)" (rowDrop)="rowDrop($event)" (rowDragStart)="rowDragStart($event)" (rowDrag)="rowDrag($event)" [taskFields]="taskSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" [isPrimaryKey]="true" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public message: string = '';

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

  rowDragStartHelper(args: RowDragEventArgs): void {
    this.message = 'rowDragStartHelper event triggered';
    const draggedTask = (args.data as columnDataType[])[0];
    if (draggedTask.TaskID === 2) {
      args.cancel = true;
      this.message = 'Drag cancelled for TaskID 2';
    }
  }

  rowDragStart(args: RowDragEventArgs): void {
    this.message = 'rowDragStart event triggered';
    const draggedTask = (args.data as columnDataType[])[0];
    if (draggedTask.Progress < 50 && args.rows?.length) {
      args.rows.forEach(row => {
        (row as HTMLElement).style.background = '#ec9ec8ff';
      });
    }
  }

  rowDrag(args: RowDragEventArgs): void {
    this.message = 'rowDrag event triggered';
    if (args.rows?.length && (args.data as columnDataType[])[0].Progress > 50) {
      args.rows.forEach(row => {
        (row as HTMLElement).style.background = '#c5f4fdde';
      });
    }
  }

  rowDrop(args: RowDragEventArgs): void {
    this.message = 'rowDrop event triggered';
    const draggedTask = (args.data as columnDataType[])[0];
    if (draggedTask.TaskID === 4) {
      this.message = 'Drop cancelled for TaskID 4';
      args.cancel = true;
    }
  }

}

export interface columnDataType {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  subtasks?: columnDataType[];
}
