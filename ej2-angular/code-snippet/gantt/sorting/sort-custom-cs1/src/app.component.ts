import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttModule, SortService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [SortService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <button ejs-button id="sortColumn" (click)="sort()">Sort Custom Column</button>
    <br /><br />
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [allowSorting]="true">
    </ejs-gantt>`
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public columns: object[] = [];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Initiation', StartDate: new Date('04/02/2019'), Duration: 5, Progress: 30, ParentID: null, CustomColumn: 'Alpha' },
      { TaskID: 2, TaskName: 'Planning', StartDate: new Date('04/03/2019'), Duration: 4, Progress: 50, ParentID: 1, CustomColumn: 'Beta' },
      { TaskID: 3, TaskName: 'Execution', StartDate: new Date('04/04/2019'), Duration: 6, Progress: 70, ParentID: 1, CustomColumn: 'Gamma' },
      { TaskID: 4, TaskName: 'Closure', StartDate: new Date('04/05/2019'), Duration: 3, Progress: 90, ParentID: 1, CustomColumn: 'Delta' },
      { TaskID: 5, TaskName: 'Review', StartDate: new Date('04/06/2019'), Duration: 2, Progress: 40, ParentID: null, CustomColumn: 'Epsilon' },
      { TaskID: 6, TaskName: 'Documentation', StartDate: new Date('04/07/2019'), Duration: 3, Progress: 60, ParentID: 5, CustomColumn: 'Zeta' },
      { TaskID: 7, TaskName: 'Training', StartDate: new Date('04/08/2019'), Duration: 4, Progress: 80, ParentID: 5, CustomColumn: 'Eta' },
      { TaskID: 8, TaskName: 'Deployment', StartDate: new Date('04/09/2019'), Duration: 5, Progress: 100, ParentID: 5, CustomColumn: 'Theta' }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.splitterSettings = { columnIndex: 2 };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', width: '100' },
      { field: 'TaskName', headerText: 'Task Name', width: '200' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '100' },
      { field: 'Progress', headerText: 'Progress', width: '100' },
      { field: 'Status', headerText: 'Status', width: '120' },
      { field: 'Priority', headerText: 'Priority', width: '120' },
      { field: 'CustomColumn', headerText: 'Custom Column', width: '150' }
    ];
  }

  public sort(): void {
    (this.ganttInstance as GanttComponent).sortModule.sortColumn('CustomColumn', 'Ascending', false);
  }
}
