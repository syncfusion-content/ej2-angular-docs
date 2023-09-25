

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
    'fr-CH': {
        'schedule': {
            'day': 'journée',
            'week': 'La semaine',
            'workWeek': 'Semaine de travail',
            'month': 'Mois',
            'today': 'Aujourd`hui'
        },
        'calendar': {
            'today': 'Aujourd`hui'
        }
    }
});

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' locale='fr-CH' [selectedDate]='selectedDate'[eventSettings]='eventSettings' [views]='views'></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


