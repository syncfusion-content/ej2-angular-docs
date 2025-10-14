import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, FilterService } from '@syncfusion/ej2-angular-gantt';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonAllModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-bottom: 10px; display: flex; gap: 20px;">
      <button ejs-button id="performFilter" (click)="filterAction($event)">Filter Task Name Column</button>
      <button ejs-button id="clearFilter" (click)="filterAction($event)">Clear Filter</button>
    </div>
    <ejs-gantt #gantt height="370px" [allowFiltering]="true" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns" [filterSettings]="filterSettings">
    </ejs-gantt>`,
  styles: [`
    .e-filtermenudiv.e-icons.e-icon-filter {
      display: none;
    }
  `]
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings = {};
  public splitterSettings = {};
  public filterSettings = {};
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
      { field: 'TaskID', headerText: 'Task ID', width: '120' },
      { field: 'TaskName', headerText: 'Task Name', width: '250'},
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      columnIndex: 2
    };
  }

  public filterAction(args: MouseEvent): void {
    const targetId = (args.currentTarget as HTMLElement).id;
    if (targetId === 'performFilter') {
      (this.ganttInstance as GanttComponent).filterByColumn('TaskName', 'startswith', 'Project');
    } else {
      (this.ganttInstance as GanttComponent).clearFiltering();
    }
  }
}
