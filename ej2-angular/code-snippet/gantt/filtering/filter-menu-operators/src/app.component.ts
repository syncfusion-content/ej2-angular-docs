import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, FilterService } from '@syncfusion/ej2-angular-gantt';
import { FilterSettingsModel } from '@syncfusion/ej2-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="370px" [allowFiltering]="true" [filterSettings]="filterOptions" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object  = {};
  public filterOptions?: FilterSettingsModel;
  public columns: object[] = [];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), Approved: true },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Approved: false },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Approved: true },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Approved: false },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), Approved: true },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Approved: false },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Approved: true },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Approved: true }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.filterOptions = {
      type: 'Menu',
      operators: {
        stringOperator: [
          { value: 'startsWith', text: 'Starts With' },
          { value: 'endsWith', text: 'Ends With' },
          { value: 'contains', text: 'Contains' },
          { value: 'equal', text: 'Equal' },
          { value: 'notEqual', text: 'Not Equal' }
        ],
        numberOperator: [
          { value: 'equal', text: 'Equal' },
          { value: 'notEqual', text: 'Not Equal' },
          { value: 'greaterThan', text: 'Greater Than' },
          { value: 'lessThan', text: 'Less Than' }
        ],
        dateOperator: [
          { value: 'equal', text: 'Equal' },
          { value: 'notEqual', text: 'Not Equal' },
          { value: 'greaterThan', text: 'After' },
          { value: 'lessThan', text: 'Before' }
        ],
        booleanOperator: [
          { value: 'equal', text: 'Equal' },
          { value: 'notEqual', text: 'Not Equal' }
        ]
      }
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', width: '120' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' },
      { field: 'Approved', headerText: 'Approved', width: '140', type: 'boolean' }
    ];
    this.splitterSettings = {
      columnIndex: 2
    };
  }
}
