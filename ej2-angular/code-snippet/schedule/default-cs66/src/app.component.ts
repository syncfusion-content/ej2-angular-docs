import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule';
import { fifaEventsData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
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
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Day"></e-view> <e-view option="Week"></e-view> <e-view option="TimelineWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Agenda"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 1,
            Subject: 'Paris',
            StartTime: new Date(2018, 1, 15, 9, 0),
            EndTime: new Date(2018, 1, 15, 10, 0)
        }]
    };
    public selectedDate: Date = new Date(2018, 1, 15);
}


