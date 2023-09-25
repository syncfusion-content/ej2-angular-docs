

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, MonthService, Timezone } from '@syncfusion/ej2-angular-schedule';
import { fifaEventsData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" timezone="UTC" [eventSettings]="eventSettings" > <e-views> <e-view option="Day"></e-view> <e-view option="Week"></e-view> <e-view option="Month"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    public fifaEvents: Object[] = <Object[]>extend([], fifaEventsData, undefined, true);
    public selectedDate: Date = new Date(2018, 5, 17);
    public eventSettings?: EventSettingsModel;
    constructor() {
        let timezone: Timezone = new Timezone();
        for (let fifaEvent of this.fifaEvents) {
            let event: { [key: string]: Object } = fifaEvent as { [key: string]: Object };
            event['StartTime'] = timezone.removeLocalOffset(<Date>event['StartTime']);
            event['EndTime'] = timezone.removeLocalOffset(<Date>event['EndTime']);
        }
        this.eventSettings = { dataSource: this.fifaEvents };
    }
}


