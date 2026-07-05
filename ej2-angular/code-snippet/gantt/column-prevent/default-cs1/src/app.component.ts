import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule, ToolbarService, EditService } from '@syncfusion/ej2-angular-gantt';
import { TaskFieldsModel, ColumnModel } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ToolbarService, EditService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-bottom: 16px;">
      <button ejs-button id="add" style="margin-right: 8px;" (click)="addColumn()">Add Column</button>
      <button ejs-button id="remove" (click)="removeColumn()">Remove Column</button>
    </div>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" enablePersistence="true">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: TaskFieldsModel = {};
  public columns: ColumnModel[] = [];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 120 },
      { field: 'TaskName', headerText: 'Task Name', width: 150 },
      { field: 'StartDate', headerText: 'Start Date', width: 150 },
      { field: 'Duration', headerText: 'Duration', width: 150 },
      { field: 'Progress', headerText: 'Progress', width: 150 }
    ];
  }
  public addColumn(): void {
    const newColumn : ColumnModel = {
      field: 'Progress',
      headerText: 'Progress',
      width: 100
    };
    (this.ganttInstance.columns as ColumnModel[]).push(newColumn);
    this.ganttInstance.refresh();
  }

  public removeColumn(): void {
    this.ganttInstance.columns.pop();
    this.ganttInstance.refresh();
  }
}

