import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent, GanttModule, CellSelectingEventArgs, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CellSelectEventArgs, CellDeselectEventArgs } from '@syncfusion/ej2-angular-grids';

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  ParentID?: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, ButtonModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p id="message" *ngIf="showMessage">{{ message }}</p>
    <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" (cellSelected)="cellSelected($event)" (cellSelecting)="cellSelecting($event)" (cellDeselected)="cellDeselected($event)" (cellDeselecting)="cellDeselecting($event)" [selectionSettings]="selectionSettings" enableHover="false">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: Task[] = [];
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
      mode: 'Cell',
      type: 'Single'
    };
  }

  public cellSelected(args: CellSelectEventArgs): void {
    this.message = `Trigger cellSelected`;
    this.showMessage = true;
    (args.currentCell as HTMLElement).style.backgroundColor = 'rgb(96, 158, 101)';
  }

  public cellSelecting(args: CellSelectingEventArgs): void {
    this.message = `Trigger cellSelecting`;
    this.showMessage = true;
    const task = args.data as Task;
    if (task.TaskName === 'Perform Soil test') {
      args.cancel = true;
      this.message += ' - Selection canceled for "Perform Soil test"';
    }
  }

  public cellDeselected(args: CellDeselectEventArgs): void {
    this.message = `Trigger cellDeselected`;
    this.showMessage = true;
    if (args.cells && args.cells.length > 0) {
      const cell = args.cells[0] as HTMLElement;
      cell.style.backgroundColor = 'rgb(245, 69, 69)';
    }
  }

  public cellDeselecting(args: CellDeselectEventArgs): void {
    this.message = `Trigger cellDeselecting`;
    this.showMessage = true;
    if (args.cells && args.cells.length > 0) {
      const cell = args.cells[0] as HTMLElement;
      cell.style.color = 'rgb(253, 253, 253)';
    }
  }
}
