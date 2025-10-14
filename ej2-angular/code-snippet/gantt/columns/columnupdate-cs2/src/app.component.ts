import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  template: `
    <div style="margin-bottom: 20px;">
      <button ejs-button style="margin-right: 10px;" id="add" cssClass="e-info" (click)="addColumns()">Add Column</button>
      <button ejs-button id="delete" cssClass="e-info" (click)="deleteColumns()">Delete Column</button>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="150"></e-column>
      </e-columns>
    </ejs-gantt> `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public taskSettings: object = {};
  public data: object[] = [];
  public splitterSettings: object = {};

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  addColumns(): void {
    const newColumns: ColumnModel[] = [
      { field: 'TaskID', headerText: 'TaskID', width: 120 },
      { field: 'StartDate', headerText: 'StartDate', width: 120, format: 'yMd' }
    ];
    newColumns.forEach((col: any) => {
      this.ganttInstance?.treeGrid.grid.columns.push(col);
    });
    this.ganttInstance?.treeGrid.grid.refreshColumns();
  }

  deleteColumns(): void {
    this.ganttInstance?.treeGrid.grid.columns.pop();
    this.ganttInstance?.treeGrid.grid.refreshColumns();
  }
}
