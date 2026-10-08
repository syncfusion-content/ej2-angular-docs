import { Component, ViewChild } from '@angular/core';
import {
  GanttModule,
  GanttComponent,
  TaskFieldsModel,
  SplitterSettingsModel
} from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule, FormsModule],
  template: `
    <div style="margin-bottom: 10px">
      <label>Days Per Week: </label>
      <input
        type="number"
        [(ngModel)]="daysPerWeekValue"
        min="1"
        max="7" />

      <label style="margin-left: 10px">Days Per Month: </label>
      <input
        type="number"
        [(ngModel)]="daysPerMonthValue"
        min="1"
        max="31" />

      <button
        ejs-button
        id="updateButton"
        (click)="updateProperties()"
        style="margin-left: 10px">
        Update
      </button>
    </div>

    <ejs-gantt
      #gantt
      [dataSource]="data"
      height="380px"
      [daysPerWeek]="daysPerWeek"
      [daysPerMonth]="daysPerMonth"
      [taskFields]="taskFields"
      [splitterSettings]="splitterSettings">
    </ejs-gantt>
  `
})
export class AppComponent {
  @ViewChild('gantt')
  public ganttInstance!: GanttComponent;

  public data: object[] = GanttData;

  public daysPerWeek: number = 5;
  public daysPerMonth: number = 20;

  public daysPerWeekValue: number = 5;
  public daysPerMonthValue: number = 20;

  public taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    durationUnit: 'DurationUnit',
    parentID: 'ParentID'
  };

  public splitterSettings: SplitterSettingsModel = {
    columnIndex: 4
  };

  public updateProperties(): void {
    if (this.daysPerWeekValue < 1 || this.daysPerWeekValue > 7) {
      alert('Days per Week must be between 1 and 7');
      return;
    }

    if (this.daysPerMonthValue < 1 || this.daysPerMonthValue > 31) {
      alert('Days per Month must be between 1 and 31');
      return;
    }

    this.ganttInstance.daysPerWeek = this.daysPerWeekValue;
    this.ganttInstance.daysPerMonth = this.daysPerMonthValue;
  }
}