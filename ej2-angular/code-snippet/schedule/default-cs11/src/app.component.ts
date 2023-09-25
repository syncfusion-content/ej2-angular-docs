

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, SortComparerFunction } from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" > </ejs-schedule>`
})
export class AppComponent {
    public data: object[] = [{
        Id: 1,
        Subject: 'Rank 1',
        StartTime: new Date(2017, 9, 29, 10, 0),
        EndTime: new Date(2017, 9, 29, 11, 30),
        IsAllDay: false,
        RankId: '1'
    }, {
        Id: 2,
        Subject: 'Rank 3',
        StartTime: new Date(2017, 9, 29, 10, 30),
        EndTime: new Date(2017, 9, 29, 12, 30),
        IsAllDay: false,
        RankId: '3'
    }, {
        Id: 3,
        Subject: 'Rank 6',
        StartTime: new Date(2017, 9, 29, 7, 0),
        EndTime: new Date(2017, 9, 29, 14, 30),
        IsAllDay: false,
        RankId: '6'
    }, {
        Id: 4,
        Subject: 'Rank 9',
        StartTime: new Date(2017, 9, 29, 11, 0),
        EndTime: new Date(2017, 9, 29, 15, 30),
        IsAllDay: false,
        RankId: '9'
    }];
    public comparerFun: SortComparerFunction = (args: Record<string, any>[]) => {
        args.sort((event1: Record<string, any>, event2: Record<string, any>) => event1['RankId'].localeCompare(event2['RankId'], undefined, { numeric: true }));
        return args;
    }
    public selectedDate: Date = new Date(2017, 9, 29);
    public eventSettings: EventSettingsModel = {
        dataSource: this.data,
        sortComparer: this.comparerFun
    };
}


