

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, TimelineViewsService, TimelineMonthService, MonthService, AgendaService, DragAndDropService } from
    '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, TimelineMonthService, MonthService, AgendaService, DragAndDropService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [allowDragAndDrop] = 'false'
  [eventSettings]="eventSettings" ></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
}


