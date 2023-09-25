

import { Component, ViewChild } from '@angular/core';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, EventRenderedArgs, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" (eventRendered)="setMinimumHeight($event)"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public data = [{
        Id: 13,
        Subject: 'Myths of Andromeda Galaxy',
        StartTime: new Date(2018, 1, 16, 10, 30),
        EndTime: new Date(2018, 1, 16, 10, 40)
    }, {
        Id: 14,
        Subject: 'Aliens vs Humans',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 10, 20)
    }];
    public eventSettings: EventSettingsModel = {
        dataSource: this.data,
    };
    setMinimumHeight(args: EventRenderedArgs): void {
        if (this.scheduleObj?.currentView !== 'Month') {
            let cellHeight: number = (this.scheduleObj?.element.querySelector('.e-work-cells') as HTMLElement).offsetHeight;
            let appHeight: number = (args.data['EndTime'].getTime() - args.data['StartTime'].getTime())
            / (60 * 1000) * (cellHeight * (this.scheduleObj as any).timeScale.slotCount) / (this.scheduleObj as any).timeScale.interval;
            args.element.style.height = appHeight + 'px';
        }
    }
}


