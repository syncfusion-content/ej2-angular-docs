import { Component } from '@angular/core';
import {
  GanttModule,
  TaskFieldsModel,
  LabelSettingsModel,
  CalendarSettingsModel
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './datasource';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt
      [dataSource]="data"
      height="450px"
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
  public data: object[] = GanttData;

  public projectStartDate: Date = new Date('04/01/2026');
  public projectEndDate: Date = new Date('04/30/2026');

  public taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    parentID: 'ParentId',
    calendarId: 'CalendarId'
  };

  public labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };

  public calendarSettings: CalendarSettingsModel = {
    projectCalendar: {
      workingTime: [
        { from: 9, to: 17 }
      ]
    },
    taskCalendars: [
      {
        calendarId: 'day-shift',
        workingTime: [
          { from: 9, to: 17 }
        ],
        holidays: [],
        exceptions: [
          {
            from: new Date('04/09/2026'),
            to: new Date('04/09/2026'),
            name: 'Team Meeting Day',
            isWorking: true,
            workingTime: [
              { from: 10, to: 16 }
            ]
          }
        ]
      },
      {
        calendarId: 'night-shift',
        workingTime: [
          { from: 17, to: 9 }
        ],
        holidays: [],
        exceptions: [
          {
            from: new Date('04/10/2026'),
            to: new Date('04/10/2026'),
            name: 'Maintenance Window',
            isWorking: true,
            workingTime: [
              { from: 18, to: 8 }
            ]
          }
        ]
      }
    ]
  };
}