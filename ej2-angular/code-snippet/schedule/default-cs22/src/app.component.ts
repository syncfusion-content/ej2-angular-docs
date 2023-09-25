

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, ActionEventArgs, DayService, WeekService, WorkWeekService, MonthService, EventFieldsMapping } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)" >
   <e-views> <e-view option="Day"></e-view> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view></e-views> </ejs-schedule>`,
   styles: [`
#container {
  visibility: hidden;
}

#loader {
  color: #008cff;
  height: 40px;
  width: 30%;
  position: absolute;
  top: 45%;
  left: 45%;
}

.templatewrap {
  text-align: center;
  width: 100%;
}

.templatewrap img {
  width: 20px;
  height: 20px;
}

/* csslint ignore:start */
.schedule-cell-dimension.e-schedule .e-vertical-view .e-date-header-wrap table col,
.schedule-cell-dimension.e-schedule .e-vertical-view .e-content-wrap table col {
    width: 200px;
}

.schedule-cell-dimension.e-schedule .e-vertical-view .e-time-cells-wrap table th,
.schedule-cell-dimension.e-schedule .e-vertical-view .e-work-cells {
    height: 100px;
}

.schedule-cell-dimension.e-schedule .e-month-view .e-work-cells,
.schedule-cell-dimension.e-schedule .e-month-view .e-date-header-wrap table col {
    width: 200px;
}

.schedule-cell-dimension.e-schedule .e-month-view .e-work-cells {
    height: 200px;
}
/* csslint ignore:end */
`],
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public onActionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'eventCreate' && (<Object[]>args.data).length > 0) {
    let eventData: { [key: string]: Object } = (<Object[]>args.data)[0] as { [key: string]: Object };
    let eventField: EventFieldsMapping = this.scheduleObj?.eventFields as EventFieldsMapping;
    let startDate: Date = eventData[eventField.startTime||''] as Date;
    let endDate: Date = eventData[eventField.endTime ||''] as Date;
    args.cancel = !this.scheduleObj?.isSlotAvailable(startDate, endDate); }
  }
}


