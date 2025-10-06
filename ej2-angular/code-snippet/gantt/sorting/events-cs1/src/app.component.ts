import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, SortService } from '@syncfusion/ej2-angular-gantt';
import { SortEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SortService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-left:100px;">
      <p style="color:red;" id="message">{{ message }}</p>
    </div>
    <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [allowSorting]="true" (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)"></ejs-gantt>`
})
export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public columns: object[] = [];
  public message: string = '';

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), Duration: 5, Progress: 30 },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/03/2019'), Duration: 4, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/05/2019'), Duration: 4, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/06/2019'), Duration: 6, Progress: 60 },
      { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/07/2019'), Duration: 3, Progress: 70 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 3, Progress: 80 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'), Duration: 3, Progress: 90 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress'
    };
    this.splitterSettings = { columnIndex: 3 };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
  }

  public actionBegin(args: SortEventArgs): void {
    if (args.requestType === 'sorting' && args.columnName === 'TaskID') {
      this.message = `${args.requestType} action cancelled for ${args.columnName} column`;
      args.cancel = true;
    }
  }

  public actionComplete(args: SortEventArgs): void {
    if (args.requestType === 'sorting' && args.columnName === 'StartDate') {
    this.message = `${args.requestType} action cancelled for ${args.columnName} column`;
    }
  }
}
