

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent,EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild("scheduleObj")
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public onActionBegin(args: ActionEventArgs): void {
        if (args.requestType == 'eventChange') {
            const weekEnds: number[] = [0, 6];
            const data: { [key: string]: Object } = args.data as { [key: string]: Object };
            const weekDay: boolean = weekEnds.indexOf((data['StartTime'] as Date).getDay()) >= 0;
            const workHours: boolean = ((parseInt(this.scheduleObj!.workHours.start!.toString().slice(0, 2), 10) <= (data['StartTime'] as Date).getHours()) && (parseInt(this.scheduleObj!.workHours.end!.toString().slice(0, 2), 10)) >= (data['StartTime'] as Date).getHours());
            if (weekDay || !workHours) {
                args.cancel = true;
            }
        }
    }
}


