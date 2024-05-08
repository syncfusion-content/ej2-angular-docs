import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

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
                MonthAgendaService],
standalone: true,
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<button ejs-button cssClass='e-info' (click)='editor()'> Click to open Editor </button>
  <button ejs-button cssClass='e-info' (click)='eventEditor()'> Click to open Event Editor </button>
  <ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    editor(): void {
    let cellData: Object = {
        startTime: new Date(2018, 1, 15, 10, 0),
        endTime: new Date(2018, 1, 15, 11, 0),
    };
    this.scheduleObj?.openEditor(cellData,'Add');
    }
    eventEditor(): void {
    let eventData: Object ={
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: new Date(2018, 1, 14, 13, 0),
        EndTime: new Date(2018, 1, 14, 14, 30)
    };
    this.scheduleObj?.openEditor(eventData,'Save');
    }
}


