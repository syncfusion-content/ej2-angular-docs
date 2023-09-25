

import { Component } from '@angular/core';
import { EventSettingsModel, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [views]="scheduleViews" [rowAutoHeight]="rowAutoHeight" [selectedDate]="selectedDate" [eventSettings]="eventSettings" [currentView]="currentView">
  <e-views><e-view option='Month' ></e-view></e-views></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 15);
  public scheduleViews: View[] = ['Month'];
  public rowAutoHeight: boolean = true;
  public currentView: View = 'Month';
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


