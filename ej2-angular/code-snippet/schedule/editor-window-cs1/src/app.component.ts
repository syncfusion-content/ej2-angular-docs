

import { L10n } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, TimelineViewsService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData} from './datasource';

L10n.load({
  'en-US': {
      'schedule': {
          'saveButton': 'Add',
          'cancelButton': 'Close',
          'deleteButton': 'Remove',
          'newEvent': 'Add Event',
      },
  }
});
@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, TimelineViewsService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`
})


export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData
    };
 }


