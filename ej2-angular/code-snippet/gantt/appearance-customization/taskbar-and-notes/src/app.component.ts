import { Component } from '@angular/core';
import { GanttModule, IQueryTaskbarInfoEventArgs, QueryCellInfoEventArgs, Column } from '@syncfusion/ej2-angular-gantt';

interface GanttTask {
  TaskId: number;
  TaskName: string;
  StartDate: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  Info?: string;
  ParentId?: number;
  Predecessor?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskFields" (queryTaskbarInfo)="queryTaskbarInfo($event)" (queryCellInfo)="queryCellInfo($event)">
    </ejs-gantt>`
})
export class AppComponent {
  public data: GanttTask[] = [
    { TaskId: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskId: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 30, Info: 'Measure the total property area alloted for construction', ParentId: 1 },
    { TaskId: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2', Info: 'Obtain an engineered soil test of lot where construction is planned.', ParentId: 1 },
    { TaskId: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, ParentId: 1 },
    { TaskId: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
    { TaskId: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '4', Progress: 30, Info: 'Develop floor plans and obtain a materials list for estimations', ParentId: 5 },
    { TaskId: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '6', Info: '', ParentId: 5 },
    { TaskId: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '7', Info: '', ParentId: 5 },
    { TaskId: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30, Info: 'If required obtain approval from HOA' },
    { TaskId: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'), EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9' }
  ];

  public taskFields: Record<string, string> = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentId',
    notes: 'Info'
  };

  public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
    const task = args.data as GanttTask;
    if (task.TaskId >= 7 && task.TaskId <= 10) {
      (args.taskbarElement as HTMLElement).style.visibility = 'hidden';
    }
  }

  public queryCellInfo(args: QueryCellInfoEventArgs): void {
    const column = args.column as Column;
    const task = args.data as GanttTask;

    if (column.field === 'Info' && (!task.Info || task.Info.trim() === '')) {
      const notesIcon = (args.cell as HTMLElement).querySelector('.e-notes-info');
      if (notesIcon instanceof HTMLElement) {
        notesIcon.style.visibility = 'hidden';
      }
    }
  }
}
``