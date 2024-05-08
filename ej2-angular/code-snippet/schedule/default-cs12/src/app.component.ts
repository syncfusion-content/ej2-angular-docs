import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';
import { EventSettingsModel, DayService, TimelineViewsService, TimelineMonthService, MonthService, AgendaService, DragAndDropService, MonthAgendaService } from
    '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],
standalone: true,
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, TimelineMonthService, MonthService, AgendaService, DragAndDropService, MonthAgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" ></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
}


