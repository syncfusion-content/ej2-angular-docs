

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<button #refButton ejs-button id="refButton" cssClass='e-info' content="Refresh Layout" (click)="onButtonClick()"></button>
  <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild("scheduleObj")
    public scheduleObj?: ScheduleComponent;
    @ViewChild("refButton")
    public refButton?: ButtonComponent;
    public selectedDate: Date = new Date(2021, 10, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 1,
            Subject: 'Testing',
            StartTime: new Date(2021, 10, 16, 10, 0),
            EndTime: new Date(2021, 10, 16, 12, 0),
            IsAllDay: false
        }, {
            Id: 2,
            Subject: 'Vacation',
            StartTime: new Date(2021, 10, 18, 10, 0),
            EndTime: new Date(2021, 10, 18, 12, 0),
            IsAllDay: false
        }]
    }
    public onButtonClick(): void {
        this.scheduleObj?.refreshLayout();
        this.refButton?.element.setAttribute('disabled', 'true');
    }
}


