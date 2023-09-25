

import { Component } from '@angular/core';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService,
    MonthService, AgendaService
} from '@syncfusion/ej2-angular-schedule';

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
        Subject: 'Scrum Meeting',
        StartTime: new Date(2018, 0, 28, 10, 0),
        EndTime: new Date(2018, 0, 28, 12, 30),
        IsAllDay: false,
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=8',
        RecurrenceException: '20180130T043000Z'
    }, {
        Id: 2,
        Subject: 'Scrum Meeting',
        StartTime: new Date(2018, 0, 30, 9, 0),
        EndTime: new Date(2018, 0, 30, 10, 30),
        Description: 'Meeting time changed based on team activities.',
        RecurrenceID: 1
    }
    ];
    public selectedDate: Date = new Date(2018, 0, 28);
    public eventSettings: EventSettingsModel = {
        dataSource: this.data
    };
}


