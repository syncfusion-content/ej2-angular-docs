

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, TimelineMonthService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, MonthService, AgendaService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" ></ejs-schedule>`
})
export class AppComponent {
    public data: object[] = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2020, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false
    },{
        Id: 2,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2020, 1, 16, 12, 0),
        EndTime: new Date(2018, 1, 16, 13, 0),
        IsAllDay: false
    }];
    public selectedDate: Date = new Date(2020, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: this.data};
    public timezoneDataSource : { Value: string, Text: string }[] = [
                    { Value: 'Pacific/Niue', Text: 'Niue' },
                    { Value: 'Pacific/Pago_Pago', Text: 'Pago Pago' },
                    { Value: 'Pacific/Honolulu', Text: 'Hawaii Time' },
                    { Value: 'Pacific/Rarotonga', Text: 'Rarotonga' },
                    { Value: 'Pacific/Tahiti', Text: 'Tahiti' },
                ]
}


