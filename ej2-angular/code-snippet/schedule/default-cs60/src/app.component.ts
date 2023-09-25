

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineViewsService, TimelineMonthService, AgendaService, View } from '@syncfusion/ej2-angular-schedule';
import { eventData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineViewsService, TimelineMonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [views]="scheduleViews" [selectedDate]="selectedDate" [eventSettings]="eventSettings" [rowAutoHeight]="rowAutoHeight" [currentView]="currentView">
  <e-views> <e-view option='TimelineDay'></e-view>
            <e-view option='TimelineWeek'></e-view>
            <e-view option='TimelineWorkWeek'></e-view>
            <e-view option='TimelineMonth'></e-view>
            <e-view option='Agenda'></e-view>
  </e-views></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public rowAutoHeight: boolean = true;
  public scheduleViews: View[] = ['TimelineWeek'];
  public currentView: View = 'TimelineWeek';
  public eventSettings: EventSettingsModel = { dataSource: eventData };
 }


