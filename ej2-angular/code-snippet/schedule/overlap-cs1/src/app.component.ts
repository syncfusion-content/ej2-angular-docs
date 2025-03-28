import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService, AgendaService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';

@Component({
    imports: [ScheduleModule, ButtonModule],
    standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" [allowOverlap]="false"></ejs-schedule>`
})
export class AppComponent {

    public eventsData: Record<string, any>[] = [
        {
            Id: 1,
            Subject: "Annual Conference",
            StartTime: new Date(2025, 2, 2, 10, 0, 0),
            EndTime: new Date(2025, 2, 2, 11, 0, 0)
        },
        {
            Id: 2,
            Subject: "Tech Symposium",
            StartTime: new Date(2025, 2, 2, 10, 30, 0),
            EndTime: new Date(2025, 2, 2, 11, 30, 0)
        },
        {
            Id: 3,
            Subject: "Client Meeting",
            StartTime: new Date(2025, 2, 3, 12, 0, 0),
            EndTime: new Date(2025, 2, 3, 14, 0, 0),
            RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=5"
        },
        {
            Id: 4,
            Subject: "Project Review",
            StartTime: new Date(2025, 2, 4, 11, 0, 0),
            EndTime: new Date(2025, 2, 4, 14, 0, 0)
        },
        {
            Id: 5,
            Subject: "Strategy Session",
            StartTime: new Date(2025, 2, 6, 9, 30, 0),
            EndTime: new Date(2025, 2, 6, 10, 0, 0)
        },
        {
            Id: 6,
            Subject: "Board Meeting",
            StartTime: new Date(2025, 2, 6, 9, 30, 0),
            EndTime: new Date(2025, 2, 6, 11, 0, 0)
        }
    ];

    public selectedDate: Date = new Date(2025, 2, 6);
    public eventSettings: EventSettingsModel = {
        dataSource: this.eventsData
    };
}


