import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [GanttModule, TextBoxModule, ButtonModule],
  providers: [SelectionService],
  template: `
    <div style="display: flex; align-items: center; gap: 10px; padding: 20px 0;">
      <label style="font-weight: bold;">Start Row Index:</label>
      <ejs-textbox #startTextbox type="number" width="120"></ejs-textbox>
      <label style="font-weight: bold;">End Row Index:</label>
      <ejs-textbox #endTextbox type="number" width="120"></ejs-textbox>
      <button ejs-button (click)="selectRowRange()">Select Rows</button>
    </div>
    <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings" enableHover="true">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  @ViewChild('startTextbox') public startTextbox!: TextBoxComponent;
  @ViewChild('endTextbox') public endTextbox!: TextBoxComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {};

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Planning', StartDate: new Date('2023-04-01'), Duration: 5, Progress: 40 },
      { TaskID: 2, TaskName: 'Requirement Analysis', StartDate: new Date('2023-04-06'), Duration: 4, ParentID: 1, Progress: 60 },
      { TaskID: 3, TaskName: 'Design', StartDate: new Date('2023-04-10'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: 'Development', StartDate: new Date('2023-04-14'), Duration: 3, ParentID: 1, Progress: 30 },
      { TaskID: 5, TaskName: 'Testing', StartDate: new Date('2023-04-18'), Duration: 6, Progress: 20 },
      { TaskID: 6, TaskName: 'Deployment', StartDate: new Date('2023-04-24'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 7, TaskName: 'Maintenance', StartDate: new Date('2023-04-27'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 8, TaskName: 'Closure', StartDate: new Date('2023-04-30'), Duration: 2, ParentID: 5, Progress: 50 }
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

  public selectRowRange(): void {
    const start = parseInt(this.startTextbox.element.value, 10);
    const end = parseInt(this.endTextbox.element.value, 10);
    if (!isNaN(start) && !isNaN(end) && start >= 0 && end >= start) {
      this.ganttInstance.clearSelection();
      this.ganttInstance.selectionModule.selectRowsByRange(start, end);
    }
  }
}
