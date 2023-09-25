

import { Component, ViewEncapsulation } from '@angular/core';
import { webinarData } from './datasource';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { Internationalization } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    templateUrl: './app.component.html',
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = {
        dataSource: webinarData,
    };
    private instance: Internationalization = new Internationalization();
readonly: any;
    getTimeString(value: Date): string {
        return this.instance.formatDate(value, { skeleton: 'hm' });
    }
}


