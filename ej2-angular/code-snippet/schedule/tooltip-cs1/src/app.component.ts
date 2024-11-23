import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, EventSettingsModel} from '@syncfusion/ej2-angular-schedule'


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { eventsData } from './datasource';

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
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData,
        enableTooltip: true,
    };
currentView: any;
}


