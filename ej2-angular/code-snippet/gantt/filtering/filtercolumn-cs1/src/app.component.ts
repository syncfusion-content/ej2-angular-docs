import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, FilterService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <button class="filter-btn" ejs-button (click)="onSingleValueFilter()">Filter with single value</button>
    <button ejs-button id="multiFilter" (click)="onMultipleValueFilter()">Filter with multiple values</button>
    <br /><br /><br />
    <ejs-gantt #gantt height="430px" [allowFiltering]="true" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns">
    </ejs-gantt>`,
  styles: [`
    .filter-btn {
      margin-right: 10px;
    }
  `]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public columns: object[] = [];

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
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '120' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      columnIndex: 3
    };
  }

  // Filter by a single value.
  onSingleValueFilter(): void {
    this.ganttInstance.clearFiltering();
    this.ganttInstance.filterByColumn('TaskName', 'startswith', 'Iden', 'and');
  }

  // Filter by multiple values.
  onMultipleValueFilter(): void {
    this.ganttInstance.clearFiltering();
    this.ganttInstance.filterByColumn('TaskID', 'equal', [2, 3, 4], 'or');
  }
}
