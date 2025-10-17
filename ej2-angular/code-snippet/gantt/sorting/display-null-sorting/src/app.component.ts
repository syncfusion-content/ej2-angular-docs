import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, SortService } from '@syncfusion/ej2-angular-gantt';
import { SortDirection, SortEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SortService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [allowSorting]="true" (actionBegin)="actionBegin($event)">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public columns: object[] = [];
  public splitterSettings: object = {};
  public sortSettings: object = {};
  public action: 'Ascending' | 'Descending' = 'Ascending';

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: null, StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: null, StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
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
      {
        field: 'TaskName',
        headerText: 'Task Name',
        width: '250',
        sortComparer: this.customSortComparer
      },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = { columnIndex: 3 };
  }

  public actionBegin(args: SortEventArgs) {
    if (args.requestType === 'sorting') {
      this.action = args.direction as SortDirection ;
    }
  }

  public customSortComparer = (reference: string, comparer: string): number => {
    const sortAsc = this.action === 'Ascending';
    
    // Always push nulls to the bottom.
    if (reference === null && comparer === null) return 0;
    if (reference === null) return 1;
    if (comparer === null) return -1;

    // Normal string comparison.
    if (reference < comparer) return sortAsc ? -1 : 1;
    if (reference > comparer) return sortAsc ? 1 : -1;
    return 0;
  };
}
