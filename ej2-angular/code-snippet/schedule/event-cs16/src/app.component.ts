

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { scheduleData } from './datasource';
import {
    DayService, TimelineViewsService, WorkWeekService, MonthService, EventRenderedArgs, ScheduleComponent, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj height='550px' cssClass='custom-class' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" (eventRendered)="onEventRendered($event)"></ejs-schedule>`,
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
    public isReadOnly: Function = (data: { [key: string]: Object }): boolean => {
        return (data['EndTime'] < (this.scheduleObj as any).selectedDate);
    };
    onEventRendered(args: EventRenderedArgs) {
        if (this.isReadOnly(args.data)) {
            args.element.classList.add('e-past-app');
        }
    }
}


