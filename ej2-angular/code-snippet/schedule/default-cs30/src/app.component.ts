

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<button #editButton ejs-button id="editButton" type="button" content="Edit" (click)="onButtonClick()"></button>
  <ejs-schedule #scheduleObj width='100%' height='520px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [views]="scheduleViews"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild("scheduleObj")
    public scheduleObj?: ScheduleComponent;
    @ViewChild("editButton")
    public editButton?: ButtonComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month'];
    public eventSettings: EventSettingsModel = {
        dataSource: [{
            Id: 3,
            Subject: 'Testing',
            StartTime: new Date(2018, 1, 11, 9, 0),
            EndTime: new Date(2018, 1, 11, 10, 0),
            IsAllDay: false
        }, {
            Id: 4,
            Subject: 'Vacation',
            StartTime: new Date(2018, 1, 13, 9, 0),
            EndTime: new Date(2018, 1, 13, 10, 0),
            IsAllDay: false
        }]
    }
    public onButtonClick(): void {
        let data: Object = {
            Id: 3,
            Subject: 'Testing-edited',
            StartTime: new Date(2018, 1, 11, 10, 0),
            EndTime: new Date(2018, 1, 11, 11, 0),
            IsAllDay: false
        };
        this.scheduleObj?.saveEvent(data);
        this.editButton?.element.setAttribute('disabled','true');
    }
}


