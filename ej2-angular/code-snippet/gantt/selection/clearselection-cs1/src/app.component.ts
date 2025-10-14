import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule, DropDownListModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div>
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
        <label style="font-weight: bold;">Choose selection mode:</label>
        <ejs-dropdownlist [dataSource]="dropdownData" [width]="150" [index]="0" (change)="valueChange($event)">
        </ejs-dropdownlist>
        <button ejs-button (click)="clear()">Clear Selection</button>
      </div>
      <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings">
      </ejs-gantt>
    </div>`
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttObj!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {};
  public dropdownData: Object[] = [
    { text: 'Row', value: 'Row' },
    { text: 'Cell', value: 'Cell' },
    { text: 'Both', value: 'Both' }
  ];
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
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.selectionSettings = {
      mode: 'Both',
      type: 'Multiple'
    };
  }
  valueChange(args: ChangeEventArgs): void {
    ((this.ganttObj as GanttComponent).selectionSettings.mode as SelectionMode) = (args.value as SelectionMode);
  }
  clear(): void {
    this.ganttObj.clearSelection();
  }
}
