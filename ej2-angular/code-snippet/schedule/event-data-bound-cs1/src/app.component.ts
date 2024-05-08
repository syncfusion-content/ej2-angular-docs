import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { eventsData } from './datasource';
import { EventSettingsModel,
    ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
    selector: 'app-root',
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
        let event: Object[] = (this.scheduleObj as any).getCurrentViewEvents();
        if (event.length > 0) {
            this.appendElement(`Events present on current view ${event.length}`);
        } else {
            this.appendElement('No Events available in this view.');
        }
    }
    appendElement(html: string): void {
        this.eventLogs.push(`${html}`);
    }
}


