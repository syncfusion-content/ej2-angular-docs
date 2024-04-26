import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { MonthService, TimelineMonthService, TimelineYearService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import {
     EventSettingsModel, MonthService
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],

providers: [TimelineMonthService, MonthService, TimelineYearService],
standalone: true,
    selector: "app-root",
    providers: [MonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="380px" [selectedDate]="selectedDate" [eventSettings]="eventSettings"> 
        <e-views>
            <e-view option="Month" [maxEventsPerRow]="3"></e-view>
        </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2023, 11, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
}


