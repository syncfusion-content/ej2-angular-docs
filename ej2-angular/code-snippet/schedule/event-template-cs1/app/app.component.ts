

import { Component, ViewChild, ElementRef } from '@angular/core';
import { eventsData } from './datasource';
import {
    DayService, TimelineViewsService, WorkWeekService, MonthService, EventClickArgs, EventSettingsModel, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    templateUrl: './app.component.html',
    styleUrls: ['./index.css'],
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    @ViewChild('eventLog') eventLog!: ElementRef<HTMLSpanElement>;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData
    };
    public  eventLogs: string[] = [];
    onClick() {
        this.eventLogs = [];
    }
    onEventClick(args: EventClickArgs): void {
        let event: Object = (this.scheduleObj as any).getEventDetails(args.element);
        let innerHtml = (event as any).Subject;
        this.eventLogs.push(`${innerHtml}`);
    }
}


