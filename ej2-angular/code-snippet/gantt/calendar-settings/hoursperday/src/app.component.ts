import { Component, ViewChild } from '@angular/core';
import {
  GanttModule,
  GanttComponent,
  TaskFieldsModel,
  LabelSettingsModel,
  CalendarSettingsModel
} from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  template: `
    <button ejs-button id="updateHoursPerDay" (click)="updateHoursPerDay()">
      Update Hours Per Day
    </button>

    <ejs-gantt
      #gantt
      [dataSource]="data"
      height="450px"
      [hoursPerDay]="hoursPerDay"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate"
      [taskFields]="taskFields"
      [labelSettings]="labelSettings"
      [calendarSettings]="calendarSettings">

      <e-columns>
        <e-column field="TaskId" headerText="ID" width="80"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="250"></e-column>
        <e-column field="StartDate" headerText="Start Date"></e-column>
        <e-column field="Duration" headerText="Duration"></e-column>
      </e-columns>

    </ejs-gantt>
  `
})
export class AppComponent {
  @ViewChild('gantt')
  public ganttInstance!: GanttComponent;

  public data: object[] = GanttData;

  public hoursPerDay: number = 8;

  public projectStartDate: Date = new Date('04/01/2026');
  public projectEndDate: Date = new Date('04/30/2026');

  public taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    parentID: 'ParentId'
  };

  public labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };

  public calendarSettings: CalendarSettingsModel = {
    projectCalendar: {
      workingTime: [
        { from: 9, to: 12 },
        { from: 13, to: 17 }
      ],
      exceptions: [
        {
          from: new Date('04/06/2026'),
          to: new Date('04/06/2026'),
          label: 'Extended Working Day'
        }
      ]
    }
  };

  public updateHoursPerDay(): void {
    this.ganttInstance.hoursPerDay = 16;
  }
}