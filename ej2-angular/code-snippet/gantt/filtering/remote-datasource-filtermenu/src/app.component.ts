import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, FilterService } from '@syncfusion/ej2-angular-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { FilterEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="370px" [allowFiltering]="true" [dataSource]="localData" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [filterSettings]="filterSettings" (actionBegin)="actionBegin($event)">
    </ejs-gantt>
  `
})
export class AppComponent implements OnInit {
  public localData: object[] = [];
  public taskSettings: object = {};
  public columns: object[] = [];
  public splitterSettings: object = {};
  public filterSettings: object = {};

  ngOnInit(): void {
    this.localData = [
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
      parentID: 'ParentId',
      dependency: 'Predecessor'
    };
    this.columns = [
      { field: 'TaskId', headerText: 'Task ID', width: '120' },
      { field: 'TaskName', headerText: 'Project Activity', width: '250', clipMode: 'EllipsisWithTooltip' },
      { field: 'StartDate', headerText: 'Planned Start Date', width: 200 },
      { field: 'Duration', headerText: 'Duration', width: 160 },
      { field: 'Progress', headerText: 'Completion (%)', width: 200 }
    ];
    this.splitterSettings = {
      columnIndex: 3
    };
    this.filterSettings = {
      type: 'Excel'
    };
  }

  public actionBegin(args: FilterEventArgs): void {
    if (args.requestType === 'filterBeforeOpen') {
      const hostUrl = 'https://ej2services.syncfusion.com/angular/development/api/GanttWebApiRemoteData';
      (args as any).filterModel.options.dataSource.josn = new DataManager({
        url: hostUrl,
        adaptor: new WebApiAdaptor(),
        crossDomain: true
      });
    }
  }
}
