import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent} from '@syncfusion/ej2-angular-schedule';

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
    template: `<button ejs-button cssClass= 'e-custom-close' (click)='cellClick()'> Show Cell Click Popup </button>
  <button ejs-button cssClass= 'e-custom-close' (click)='eventClick()'> Show Event Click Popup </button>
  <ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2023, 2, 5);
    public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 1,
            Subject: 'Review Meeting',
            StartTime: new Date(2023, 2, 5, 9, 0, 0),
            EndTime: new Date(2023, 2, 5, 10, 0, 0)
        }]
    };
    cellClick(): void {
        let cellData: Object = {
            Subject: 'Review Meeting',
            StartTime: new Date(2023, 2, 5, 9, 0, 0),
            EndTime: new Date(2023, 2, 5, 10, 0, 0)
        };
        this.scheduleObj?.openQuickInfoPopup(cellData);
    }
    eventClick(): void {
        let eventData: Object = {
            Id: 1,
            Subject: 'Review Meeting',
            StartTime: new Date(2023, 2, 5, 9, 0, 0),
            EndTime: new Date(2023, 2, 5, 10, 0, 0)
        };
        this.scheduleObj?.openQuickInfoPopup(eventData);
    }
}



