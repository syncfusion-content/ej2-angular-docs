

import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<button #addButtonObj ejs-button cssClass='e-info' (click)='add()'> Add </button>
  <button #editButtonObj ejs-button cssClass='e-info' (click)='edit()'> Edit </button>
  <button #deleteButtonObj ejs-button cssClass='e-info' (click)='delete()'> Delete </button>
  <ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj', { static: true })
    public scheduleObj?: ScheduleComponent;
    @ViewChild('addButtonObj', { static: true })
    public addButtonObj?: ButtonComponent;
    @ViewChild('editButtonObj', { static: true })
    public editButtonObj?: ButtonComponent;
    @ViewChild('deleteButtonObj', { static: true })
    public deleteButtonObj?: ButtonComponent;
    public data: object [] = [{
        Id: 3,
        Subject: 'Testing',
        StartTime: new Date(2018, 1, 11, 9, 0),
        EndTime: new Date(2018, 1, 11, 10, 0),
        IsAllDay: false
        },{
        Id: 4,
        Subject: 'Vacation',
        StartTime: new Date(2018, 1, 13, 9, 0),
        EndTime: new Date(2018, 1, 13, 10, 0),
        IsAllDay: false
    }];
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: this.data };
    add(): void {
        let Data: Object[] = [{
            Id: 1,
            Subject: 'Conference',
            StartTime: new Date(2018, 1, 12, 9, 0),
            EndTime: new Date(2018, 1, 12, 10, 0),
            IsAllDay: false
        },{
            Id: 2,
            Subject: 'Meeting',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 11, 30),
            IsAllDay: false
            }];
        this.scheduleObj?.addEvent(Data);
        this.addButtonObj?.element.setAttribute('disabled','true');
    }
    edit(): void {
        let data: { [key: string]: Object; } = {
            Id: 3,
            Subject: 'Testing-edited',
            StartTime: new Date(2018, 1, 11, 10, 0),
            EndTime: new Date(2018, 1, 11, 11, 0),
            IsAllDay: false
        };
        this.scheduleObj?.saveEvent(data);
        this.editButtonObj?.element.setAttribute('disabled','true');
    }
    delete(): void {
        this.scheduleObj?.deleteEvent(4);
        this.deleteButtonObj?.element.setAttribute('disabled','true');
    }
}


