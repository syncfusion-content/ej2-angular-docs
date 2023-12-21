

import { Component } from '@angular/core';
import {
    TimelineViewsService, TimelineMonthService, EventSettingsModel, MonthService, TimelineYearService
} from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
    selector: "app-root",
    providers: [MonthService, TimelineViewsService, TimelineMonthService, TimelineYearService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="650px" [selectedDate]="selectedDate" [eventSettings]="eventSettings"> 
        <e-views>
            <e-view option="Month" [maxEventsPerRow]="3"></e-view>
            <e-view option="TimelineMonth" [maxEventsPerRow]="3"></e-view>
            <e-view option="TimelineYear" displayName="Horizontal TimelineYear" [maxEventsPerRow]="3"></e-view>
            <e-view option="TimelineYear" displayName="Vertical TimelineYear" orientation="Vertical" [maxEventsPerRow]="3"></e-view>
        </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2023, 11, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
    };
}


