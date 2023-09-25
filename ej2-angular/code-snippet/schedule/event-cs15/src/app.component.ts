

import { Component, ViewChild } from '@angular/core';
import { scheduleData } from './datasource';
import {
    DayService, TimelineViewsService, WorkWeekService, MonthService, ActionEventArgs, ScheduleComponent,
    EventSettingsModel, EventFieldsMapping
} from '@syncfusion/ej2-angular-schedule';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' #scheduleObj height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
    onActionBegin(args: ActionEventArgs) {
        if ((args.requestType === 'eventCreate' || args.requestType === 'eventChange') && (<Object[]>args.data).length > 0
            || !isNullOrUndefined((args as any).data)) {
            let eventData: any = args.data as any;
            let eventField: EventFieldsMapping | undefined = this.scheduleObj?.eventFields;
            let startDate: Date = (((<Object[]>args.data).length > 0)
                ? eventData[0][(eventField as any).startTime] : eventData[(eventField as any).startTime]) as Date;
            let endDate: Date = (((<Object[]>args.data).length > 0)
                ? eventData[0][(eventField as any).endTime] : eventData[(eventField as any).endTime]) as Date;
            args.cancel = !this.scheduleObj?.isSlotAvailable(startDate, endDate);
        }
    }
}


