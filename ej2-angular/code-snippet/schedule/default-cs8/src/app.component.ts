import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
    imports: [ScheduleModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" > </ejs-schedule>`
})
export class AppComponent {
    public data: object[] = [{
        TravelId: 2,
        TravelSummary: 'Paris',
        DepartureTime: new Date(2018, 1, 15, 10, 0),
        ArrivalTime: new Date(2018, 1, 15, 12, 30),
        FullDay: false,
        Source: 'London',
        Comments: 'Summer vacation planned for outstation.',
        Origin: 'Asia/Yekaterinburg',
        Destination: 'Asia/Yekaterinburg'
    },{
        TravelId: 1,
        TravelSummary: "Tokyo",
        DepartureTime: new Date(2018, 1, 16, 10, 0, 0),
        ArrivalTime: new Date(2018, 1, 16, 12, 30, 0),
        FullDay: false,
        Source: "Beijing",
        Comments: "Conference on emerging technologies.",
        Origin: "Asia/Yekaterinburg",
        Destination: "Asia/Yekaterinburg",
        IsDisabled: true
    }];
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: this.data,
        fields: {
            id: 'TravelId',
            subject: { name: 'TravelSummary' },
            isAllDay: { name: 'FullDay' },
            location: { name: 'Source' },
            description: { name: 'Comments' },
            startTime: { name: 'DepartureTime' },
            endTime: { name: 'ArrivalTime' },
            startTimezone: { name: 'Origin' },
            endTimezone: { name: 'Destination' },
            isBlock: 'IsDisabled',
        }
    };
}
