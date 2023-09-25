

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, MoreEventsClickArgs } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [currentView]='currentView' [eventSettings]='eventSettings' (moreEventsClick)='onMoreEventsClick($event)'></ejs-schedule>`
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public currentView: string = 'Month';
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
    onMoreEventsClick(args: MoreEventsClickArgs): void {
        args.cancel = true;
    }
}


