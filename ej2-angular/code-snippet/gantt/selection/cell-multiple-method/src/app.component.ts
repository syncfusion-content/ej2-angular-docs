import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [GanttModule, ButtonModule],
  providers: [SelectionService],
  template: `
  <div style="display: flex; flex-wrap: wrap; gap: 10px; padding: 10px 0 20px 0;">
    <button ejs-button (click)="selectCells([0, 0])">Select [0, 0]</button>
    <button ejs-button (click)="selectCells([1, 1])">Select [1, 1]</button>
    <button ejs-button (click)="selectCells([2, 2])">Select [2, 2]</button>
    <button ejs-button (click)="selectCells([3, 3])">Select [3, 3]</button>
    <button ejs-button (click)="selectCells([4, 4])">Select [4, 4]</button>
    <button ejs-button (click)="selectCells([5, 0])">Select [5, 0]</button>
    <button ejs-button (click)="selectCells([6, 1])">Select [6, 1]</button>
    <button ejs-button (click)="selectCells([7, 2])">Select [7, 2]</button>
    <button ejs-button (click)="selectCells([3, 4])">Select [3, 4]</button>
  </div>
  <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings" enableHover="true">
  </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {};

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Kickoff', StartDate: new Date('2023-04-01'), Duration: 5, Progress: 40 },
      { TaskID: 2, TaskName: 'Requirement Gathering', StartDate: new Date('2023-04-06'), Duration: 4, ParentID: 1, Progress: 60 },
      { TaskID: 3, TaskName: 'Feasibility Study', StartDate: new Date('2023-04-10'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: 'Initial Approval', StartDate: new Date('2023-04-14'), Duration: 3, ParentID: 1, Progress: 30 },
      { TaskID: 5, TaskName: 'Design Phase', StartDate: new Date('2023-04-18'), Duration: 6, Progress: 20 },
      { TaskID: 6, TaskName: 'UI/UX Design', StartDate: new Date('2023-04-24'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 7, TaskName: 'Architecture Planning', StartDate: new Date('2023-04-27'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 8, TaskName: 'Final Review', StartDate: new Date('2023-04-30'), Duration: 2, ParentID: 5, Progress: 50 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.selectionSettings = {
      mode: 'Cell',
      type: 'Multiple'
    };
  }
  public selectCells(indexes: number[]): void {
    (this.ganttInstance as GanttComponent).clearSelection();
    const rowIndex = indexes[0];
    const cellIndex = indexes[1];
    const cell = {
      rowIndex: rowIndex,
      cellIndexes: [cellIndex]
    };
    (this.ganttInstance as GanttComponent).selectCells([cell]);
  }
}