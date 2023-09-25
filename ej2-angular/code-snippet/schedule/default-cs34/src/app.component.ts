

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<button #deleteButton ejs-button id="deleteButton" type="button" content="Delete" (click)="onButtonClick()"></button>
  <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild("scheduleObj")
    public scheduleObj?: ScheduleComponent;
    @ViewChild("deleteButton")
    public deleteButton?: ButtonComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
    public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 3,
            Subject: 'Testing',
            StartTime: new Date(2018, 1, 11, 9, 0),
            EndTime: new Date(2018, 1, 11, 10, 0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=3'
        }, {
            Id: 4,
            Subject: 'Vacation',
            StartTime: new Date(2018, 1, 12, 11, 0),
            EndTime: new Date(2018, 1, 12, 12, 0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
        }]
    }
    public onButtonClick(): void {
        const scheduleData: { [key: string]: Object }[] = [{
            Id: 4,
            Subject: 'Vacation',
            RecurrenceID: 4,
            StartTime: new Date(2018, 1, 12, 11, 0),
            EndTime: new Date(2018, 1, 12, 12, 0),
            IsAllDay: false,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2'
        }];
        this.scheduleObj?.deleteEvent(scheduleData,'DeleteSeries');
        this.deleteButton?.element.setAttribute('disabled','true');
    }
}


