import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent, GanttModule, RowDeselectEventArgs, RowSelectEventArgs, RowSelectingEventArgs, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, ButtonModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p id="message" *ngIf="showMessage">{{ message }}</p>
    <ejs-gantt #gantt id="ganttDefault" height="370px" [dataSource]="data" [taskFields]="taskSettings" (rowSelected)="rowSelected($event)" (rowSelecting)="rowSelecting($event)" (rowDeselected)="rowDeselected($event)" (rowDeselecting)="rowDeselecting($event)" [selectionSettings]="selectionSettings" enableHover="false">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {};
  public showMessage = false;
  public message = '';

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 60 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 30 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 90 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 30 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 80 }
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
    this.selectionSettings = {
      mode: 'Row',
      type: 'Multiple'
    };
  }

  public rowSelecting(args: RowSelectingEventArgs): void {
    const task = args.data as Task;
    this.showMessage = true;
    if (task.TaskID === 2) {
      args.cancel = true;
      this.message += ' - Selection cancelled for TaskID 2';
    }
  }

  public rowSelected(args: RowSelectEventArgs): void {
    const task = args.data as Task;
    if (task.Progress && task.Progress > 40) {
      (args.row as HTMLElement).style.backgroundColor = 'rgba(203, 246, 205, 1)';
    }
  }

  public rowDeselected(args: RowDeselectEventArgs): void {
    if (args.data && !Array.isArray(args.data)) {
      const task = args.data as Task;
      if (task.Progress && task.Progress <= 40) {
        (args.row as HTMLElement).style.backgroundColor = '#e1838eff';
      }
    }
  }

  public rowDeselecting(args: RowDeselectEventArgs): void {
    if (args.data && !Array.isArray(args.data)) {
      const task = args.data as Task;
      if (task.Progress && task.Progress > 80) {
        (args.row as HTMLElement).style.backgroundColor = '#f5f54bff';
      }
    }
  }
}

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  ParentID?: number;
}