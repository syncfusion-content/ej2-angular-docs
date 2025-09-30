import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, Column, ReorderService } from '@syncfusion/ej2-angular-gantt';
import { ColumnDragEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ReorderService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin: 20px 0 10px 180px;">
      <p style="color: red;" id="message">{{ message }}</p>
    </div>
    <div style="margin-top: 10px;">
      <ejs-gantt #gantt height="430px" [dataSource]="data" [allowReordering]="true" (columnDragStart)="columnDragStart($event)" (columnDrag)="columnDrag($event)" (columnDrop)="columnDrop($event)" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
          <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
          <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
          <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
          <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        </e-columns>
      </ejs-gantt>
    </div> `
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public message?: string;

  ngOnInit(): void {
    this.data = GanttData;
    this.message = '';
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


  columnDragStart(args: ColumnDragEventArgs): void {
    this.message = `columnDragStart event triggered`;
    if (args.column?.field === 'TaskName') {
      args.column.headerText = 'Project Task';
      this.message = `Header text changed for column: ${args.column.field}`;
    }
  }

  columnDrag(args: ColumnDragEventArgs): void {
    this.message = `columnDrag event triggered`;
    if (args.column?.field === 'Duration') {
      args.column.allowReordering = false;
      this.message = `Reordering disabled for column: ${args.column.field}`;
    }
  }

  columnDrop(args: ColumnDragEventArgs): void {
    this.message = `columnDrop event triggered`;
    if (args.column?.field === 'TaskID') {
      args.column.allowReordering = false;
      this.message = `Reordering cancelled for column: ${args.column.field}`;
    }
  }
}
