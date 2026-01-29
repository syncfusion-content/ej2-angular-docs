import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, EditService, ITaskAddedEventArgs, SelectionService, IGanttData } from '@syncfusion/ej2-angular-gantt'

@Component({
  imports: [GanttModule],
  providers: [EditService, SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt [dataSource]="data" [editSettings]="editSettings" [taskFields]="taskSettings" [dayWorkingTime]="dayWorkingTime" (actionComplete)="actionComplete($event)" [timelineSettings]="timelineSettings" timezone="America/New_York" durationUnit="Hour" dateFormat="hh:mm a" height="450px" [includeWeekend]="true">`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public timelineSettings?: object;
  public timezoneValue: string = 'UTC';
  public dayWorkingTime?: object[];
  public editSettings?: object;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1, TaskName: 'Project Schedule', StartDate: new Date('02/04/2019 08:00'),
        EndDate: new Date('03/10/2019')
      },
      {
        TaskID: 2, TaskName: 'Planning', StartDate: new Date('02/04/2019 08:00'),
        EndDate: new Date('02/10/2019'), ParentID: 1
      },
      {
        TaskID: 3, TaskName: 'Plan timeline', StartDate: new Date('02/04/2019 08:00'), EndDate: new Date('02/10/2019'),
        Duration: 6, Progress: '60', ParentID: 2
      },
      {
        TaskID: 4, TaskName: 'Plan budget', StartDate: new Date('02/04/2019 08:00'),
        EndDate: new Date('02/10/2019'), Duration: 6, Progress: '90', ParentID: 2
      },
      {
        TaskID: 5, TaskName: 'Allocate resources', StartDate: new Date('02/04/2019 08:00'), EndDate: new Date('02/10/2019'),
        Duration: 6, Progress: '75', ParentID: 2
      },
      {
        TaskID: 6, TaskName: 'Planning complete', StartDate: new Date('02/06/2019 08:00'),
        EndDate: new Date('02/10/2019'), Duration: 0, Predecessor: '3FS,4FS,5FS', ParentID: 2
      },
      {
        TaskID: 7, TaskName: 'Design', StartDate: new Date('02/13/2019 08:00'), EndDate: new Date('02/17/2019 08:00'),
        ParentID: 1
      },
      {
        TaskID: 8, TaskName: 'Software Specification', StartDate: new Date('02/13/2019 08:00'), EndDate: new Date('02/15/2019'),
        Duration: 3, Progress: '60', Predecessor: '6FS', ParentID: 7
      },
      {
        TaskID: 9, TaskName: 'Develop prototype', StartDate: new Date('02/13/2019 08:00'), EndDate: new Date('02/15/2019'),
        Duration: 3, Progress: '100', Predecessor: '6FS', ParentID: 7
      },
      {
        TaskID: 10, TaskName: 'Get approval from customer', StartDate: new Date('02/16/2019 08:00'), EndDate: new Date('02/17/2019 08:00'),
        Duration: 2, Progress: '100', Predecessor: '9FS', ParentID: 7
      },
      {
        TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/17/2019 08:00'), EndDate: new Date('02/17/2019 08:00'),
        Duration: 0, Predecessor: '10FS', ParentID: 7
      }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID'
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.timelineSettings = {
      timelineUnitSize: 65,
      topTier: {
        unit: 'Day',
        format: 'MMM dd, yyyy'
      },
      bottomTier: {
        unit: 'Hour',
        format: 'hh:mm a'
      }
    };
    this.dayWorkingTime = [{ from: 0, to: 24 }];
  }

  public actionComplete(args: ITaskAddedEventArgs) {
    if (args.action == "TaskbarEditing") {
      console.log((args.data as any).ganttProperties.startDate);
    }
  }
}