import { Component } from '@angular/core';
import {
  GanttModule,
  TaskFieldsModel,
  LabelSettingsModel,
  CalendarSettingsModel,
  DayMarkersService
} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [DayMarkersService],
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
      workingTime: [{ from: 9, to: 17 }],
      holidays: [
        {
          from: new Date('04/10/2026'),
          to: new Date('04/10/2026'),
          label: 'Regional Holiday'
        }
      ]
    },
    taskCalendars: [
      {
        calendarId: 'local-team',
        holidays: [
          {
            from: new Date('04/05/2026'),
            to: new Date('04/05/2026'),
            label: 'Local Holiday'
          }
        ]
      },
      {
        calendarId: 'offshore-team',
        holidays: [
          {
            from: new Date('04/08/2026'),
            to: new Date('04/08/2026'),
            label: 'Offshore Holiday'
          }
        ]
      }
    ]
  };
}