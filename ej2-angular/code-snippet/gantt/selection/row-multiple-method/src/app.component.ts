import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [GanttModule, ButtonModule],
  providers: [SelectionService],
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 10px; padding: 10px 0 20px 0;">
      <button ejs-button (click)="selectRows([1, 3])">Select [1, 3]</button>
      <button ejs-button (click)="selectRows([0, 2])">Select [0, 2]</button>
      <button ejs-button (click)="selectRows([2, 4])">Select [2, 4]</button>
      <button ejs-button (click)="selectRows([0, 5])">Select [0, 5]</button>
      <button ejs-button (click)="selectRows([1, 6])">Select [1, 6]</button>
      <button ejs-button (click)="selectRows([0, 7, 2])">Select [0, 7, 2]</button>
      <button ejs-button (click)="selectRows([1, 6, 7])">Select [1, 6, 7]</button>
      <button ejs-button (click)="selectRows([4, 6, 7])">Select [4, 6, 7]</button>
      <button ejs-button (click)="selectRows([2, 5, 6])">Select [2, 5, 6]</button>
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
      mode: 'Row',
      type: 'Multiple'
    };
  }

  selectRows(rowIndexes: number[]): void {
    this.ganttInstance.clearSelection();
    this.ganttInstance.selectRows(rowIndexes);
  }
}
