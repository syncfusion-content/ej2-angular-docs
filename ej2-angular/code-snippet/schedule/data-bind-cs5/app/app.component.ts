

import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<span style="color: #FF0000">{{err}}</span><ejs-schedule #scheduleObj width='100%' height='530px' [readonly]="readonly" [selectedDate]="selectedDate" [eventSettings]="eventSettings" (actionFailure)="onActionFailure($event)"></ejs-schedule>`
})

export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2017, 5, 11);
    public err: string = '';
    private dataManager: DataManager = new DataManager({
        url: 'http://some.com/invalidUrl'
    });
    public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
readonly: any;
    onActionFailure(eventData: any): void {
       this.err = 'Server exception: 404 Not found';
    }
}


