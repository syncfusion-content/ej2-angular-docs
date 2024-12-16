import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, MonthAgendaService
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule,
        ContextMenuModule
    ],
standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public allowResizing: Boolean = false;
    public allowDragDrop: Boolean = false;
    public selectedDate: Date = new Date(2024, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], scheduleData, undefined, true) };

}


