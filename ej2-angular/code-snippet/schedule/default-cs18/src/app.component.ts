

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, DragEventArgs } from
    '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings" (dragStart) = "onDragStart($event)" ></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };

    onDragStart(args: DragEventArgs): void {
        args.navigation = { enable: true, timeDelay: 4000 };
    }
}


