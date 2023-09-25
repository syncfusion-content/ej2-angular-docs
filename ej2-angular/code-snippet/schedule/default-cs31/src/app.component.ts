

import { Component, ViewChild } from '@angular/core';
import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
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
        const data: Object[] = new DataManager(this.scheduleObj?.getCurrentViewEvents()).executeLocal(new Query().where(new Predicate('StartTime', 'lessthanorequal', new Date(2018, 1, 11, 9, 0))));
        (data[0] as any).Subject = 'edited';
        this.scheduleObj?.saveEvent(data[0],'EditOccurrence');
        this.editButton?.element.setAttribute('disabled','true');
    }
}


