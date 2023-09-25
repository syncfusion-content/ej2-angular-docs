

import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, AgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, AgendaService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule id='schedule' width='100%' height='550px' [cssClass]='cssClass'
    [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'>
    <ng-template #dateHeaderTemplate let-data>
        <div class="date-text">{{getDateHeaderText(data.date)}}</div>
        <div [innerHTML]="getWeather(data.date)"></div>
    </ng-template>
    </ejs-schedule>`,
    styles: [`.weather-text {
        padding: 5px;
        color: #e3165b;
        font-weight: 500;
    }`],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'Agenda', 'TimelineWorkWeek', 'TimelineMonth'];
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
    public cssClass: string = 'schedule-date-header-template';
    public instance: Internationalization = new Internationalization();
    getDateHeaderText: Function = (value: Date) => {
        return this.instance.formatDate(value, { skeleton: 'Ed' });
    };
    getWeather: Function = (value: Date) => {
        switch (value.getDay()) {
            case 0:
                return '<div class="weather-text">25°C</div>';
            case 1:
                return '<div class="weather-text">18°C</div>';
            case 2:
                return '<div class="weather-text">10°C</div>';
            case 3:
                return '<div class="weather-text">16°C</div>';
            case 4:
                return '<div class="weather-text">8°C</div>';
            case 5:
                return '<div class="weather-text">27°C</div>';
            case 6:
                return '<div class="weather-text">17°C</div>';
            default:
                return null;
        }
    }
}


