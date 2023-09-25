

import { Component } from '@angular/core';
import { eventsData } from './datasource';
import {
    DayService, TimelineViewsService, WorkWeekService, MonthService, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';

@Component({
    selector: 'app-root',
    providers: [DayService, TimelineViewsService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    templateUrl: './app.component.html',
    styleUrls: ['./index.css'],
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData,
        enableTooltip: true,
    };
currentView: any;
}


