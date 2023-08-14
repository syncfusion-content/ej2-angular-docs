

import { Component, ViewChild } from '@angular/core';
import { eventsData } from './datasource';
import {
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel,
    ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    templateUrl: './app.component.html',
    styleUrls: ['./index.css'],
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData
    };
    public  eventLogs: string[] = [];
    onClick() {
        this.eventLogs = [];
    }
    onDataBound(): void {
        let event: Object[] = (this.scheduleObj as any).getEvents();
        this.appendElement(' ' + event.length + ' ');
    }
    appendElement(html: string): void {
        this.eventLogs.push(`${html}`);
    }
}


