

import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, DayService, WeekService, TimelineViewsService, View } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, TimelineViewsService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [views]="scheduleViews" (created)="onCreated($event)" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public scheduleViews: View[] = ['Day', 'Week', 'TimelineWorkWeek'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  onCreated(eventData: any): void {
    let currTime: Date = new Date();
    let hours: string = currTime.getHours() < 10 ? '0' +currTime.getHours().toString() : currTime.getHours().toString();
    let minutes: string = currTime.getMinutes().toString();
    let time: string = hours + ':' + minutes;
    this.scheduleObj?.scrollTo(time);
  }
 }


