import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, FilterService, SortService } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [FilterService, SortService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="450px" width="700px" [dataSource]="data" [taskFields]="taskSettings" [allowFiltering]="true" [filterSettings]="filterSettings" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="100" [isPrimaryKey]="true"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="150"></e-column>
        <e-column field="StartDate" headerText="Start Date" width="150"></e-column>
        <e-column field="EndDate" headerText="End Date" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" width="150"></e-column>
        <e-column field="IsCompleted" headerText="Status" width="150" displayAsCheckbox="true">
          <ng-template #filterItemTemplate let-data>
            <span>{{ data.IsCompleted == true ? 'Completed' : 'In Progress' }}</span>
          </ng-template>
        </e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public filterSettings?: object;

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Management', StartDate: new Date('2023-04-02'), EndDate: new Date('2023-04-12'), Duration: 10, Progress: 40, IsCompleted: true },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('2023-04-02'), Duration: 4, Progress: 100, IsCompleted: true, ParentID: 1 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('2023-04-02'), Duration: 4, Progress: 50, IsCompleted: true, ParentID: 1 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('2023-04-02'), Duration: 4, Progress: 100, IsCompleted: true, ParentID: 1 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('2023-04-02'), EndDate: new Date('2023-04-10'), Duration: 8, Progress: 60, IsCompleted: false },
      { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2023-04-04'), Duration: 3, Progress: 100, IsCompleted: false, ParentID: 5 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('2023-04-04'), Duration: 3, Progress: 40, IsCompleted: false, ParentID: 5 }
    ];

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
      columnIndex: 3
    };

    this.filterSettings = {
      type: 'Excel'
    };
  }
}