import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'


import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { eventsData } from './datasource';
import {
    TimelineViewsService, EventClickArgs, EventSettingsModel, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule,
        CommonModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService,
                TimelineViewsService],
standalone: true,
    selector: 'app-root',
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


