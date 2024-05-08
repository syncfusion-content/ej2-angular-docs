import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
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
    template: `<button ejs-button cssClass= 'e-custom-close'  (click)='closeEditor()'> closeEditor </button> <ejs-schedule #scheduleObj width='100%' height='650px' cssClass="more-indicator-app" [selectedDate]="selectedDate" [views]="views" [eventSettings]="eventSettings"></ejs-schedule>`,
})
export class AppComponent {
    @ViewChild('scheduleObj') public scheduleObj?: ScheduleComponent;
        public selectedDate: Date = new Date(2023, 2, 5);
        public views: Array<string> = ['Month'];
        public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 1,
            Subject: 'Review Meeting',
            StartTime: new Date(2023, 2, 5, 20, 0, 0),
            EndTime: new Date(2023, 2, 5, 21, 0, 0)
        }]
    };
    closeEditor(): void {
         this.scheduleObj?.closeEditor();
    };
}



