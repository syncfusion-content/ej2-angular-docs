import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],
standalone: true,
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" > </ejs-schedule>`
})
export class AppComponent {
    public data: object[] = [{
        TravelId: 2,
        TravelSummary: 'Paris',
        DepartureTime: new Date(2018, 1, 15, 10, 0),
        ArrivalTime: new Date(2018, 1, 15, 12, 30),
        Source: 'London',
        Comments: 'Summer vacation planned for outstation.'
    }];
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: this.data,
        fields: {
            id: 'TravelId',
            subject: { name: 'TravelSummary', title: 'Summary', default: 'Add Summary' },
            location: { name: 'Source', default: 'USA' },
            description: { name: 'Comments' },
            startTime: { name: 'DepartureTime' },
            endTime: { name: 'ArrivalTime' }
        }
    };
}


