import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import {GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListModule, SwitchModule, GridModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; align-items: center;">
      <label style="padding: 30px 17px 0 0;font-weight: bold">Choose selection mode:</label>
      <ejs-dropdownlist style="padding: 26px 0 0 0" [dataSource]="dropdownData" [width]="150" [index]="0" (change)="valueChange($event)">
      </ejs-dropdownlist>
    </div>
    <div style="padding: 20px 0px 20px 0px">
      <label style="margin-right: 20px;font-weight: bold">Enable/Disable toggle selection</label>
      <ejs-switch id="switch" [checked]="true" (change)="toggleColumnSelection($event)">
      </ejs-switch>
    </div>
    <div style="padding: 20px 0px 0px 0px">
      <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings">
      </ejs-gantt>
    </div>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {};
  public dropdownData: string[] = ['Row', 'Cell', 'Both'];

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
      mode: 'Row',
      type: 'Multiple',
      enableToggle: true
    };
  }

  public valueChange(args: ChangeEventArgs): void {
   (this.ganttInstance as GanttComponent).selectionSettings.mode = args.value as 'Row' | 'Cell' | 'Both';
  }

  public toggleColumnSelection(args: CustomChangeEventArgs): void {
    (this.ganttInstance as GanttComponent).selectionSettings.enableToggle = args.checked;
  }
}

interface CustomChangeEventArgs extends ChangeEventArgs {
  checked: boolean;
}
