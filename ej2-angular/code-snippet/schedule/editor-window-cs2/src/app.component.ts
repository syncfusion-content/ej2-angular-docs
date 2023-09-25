

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, TimelineViewsService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData} from './datasource';
@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, TimelineViewsService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'TimelineWeek', 'Month', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
        fields: {
            id: 'Id',
            subject: { name: 'Subject', title: 'Event Name' },
            location: { name: 'Location', title: 'Event Location'},
            description: { name: 'Description', title: 'Event Description' },
            startTime: { name: 'StartTime', title: 'Start Duration' },
            endTime: { name: 'EndTime', title: 'End Duration'  }
        }
    };
 }


