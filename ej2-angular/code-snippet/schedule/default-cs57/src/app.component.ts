

import { Component, ViewChild} from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, PopupOpenEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]='selectedDate'
  [eventSettings]='eventSettings' (popupOpen)='onPopupOpen($event)'>
  </ejs-schedule>`
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type == 'Editor') {
        (<any>this.scheduleObj?.eventWindow).recurrenceEditor.frequencies = ['daily', 'weekly'];
    }
  }
}


