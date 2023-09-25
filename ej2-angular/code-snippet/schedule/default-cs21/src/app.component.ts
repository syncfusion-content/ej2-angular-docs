

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, ActionEventArgs, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' cssClass='schedule-cell-dimension' [selectedDate]="selectedDate" [eventSettings]="eventSettings"> </ejs-schedule>`,
  styles: [`
  .schedule-cell-dimension.e-schedule .e-vertical-view .e-date-header-wrap table col,
.schedule-cell-dimension.e-schedule .e-vertical-view .e-content-wrap table col {
    width: 200px;
}

.schedule-cell-dimension.e-schedule .e-vertical-view .e-time-cells-wrap table td,
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
`],
encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('scheduleObj', { static: true })
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


