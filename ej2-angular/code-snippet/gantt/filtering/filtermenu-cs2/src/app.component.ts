import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, FilterService } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="370px" [allowFiltering]="true" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [filterSettings]="filterSettings">
    </ejs-gantt>
  `
})
export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public columns: object[] = [];
  public splitterSettings: object = {};
  public filterSettings: object = {};

  ngOnInit(): void {
    this.data = [
      { TaskId: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskId: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50 },
      { TaskId: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50 },
      { TaskId: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50 },
      { TaskId: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskId: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5, Progress: 50 },
      { TaskId: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5, Progress: 50 },
      { TaskId: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5, Progress: 50 }
    ];
    this.taskSettings = {
      id: 'TaskId',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentId'
    };
    this.columns = [
      { field: 'TaskId', headerText: 'Task ID', textAlign: 'Left', width: '100' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      columnIndex: 3
    };
    this.filterSettings = {
      type: 'Menu'
    };
  }
}
