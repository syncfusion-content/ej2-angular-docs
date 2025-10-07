import { NgModule, ViewChild } from '@angular/core';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, SelectionService, GanttComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, DropDownListModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex">
      <label style="padding: 30px 17px 0 0;font-weight: bold">Choose selection mode:</label>
      <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="150" [dataSource]="dropdownData" (change)="valueChange($event)">
      </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-gantt #gantt height="380px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings">
      </ejs-gantt>
    </div>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) gantt!: GanttComponent;
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
  }

  valueChange(args: ChangeEventArgs): void {
    ((this.gantt as GanttComponent).selectionSettings.mode as SelectionMode) = (args.value as SelectionMode);
  }
}


