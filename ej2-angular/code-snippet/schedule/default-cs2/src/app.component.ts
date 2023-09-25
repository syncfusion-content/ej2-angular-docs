

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import {
  ScheduleComponent,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
let initialLoad = true;
@Component({
  selector: 'app-root',
  template: `<div class="control-section">
    <div class="col-lg-12 content-wrapper">
     <ejs-schedule #scheduleObj width='100%' height='750px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"(dataBound)="dataBound($event)" ></ejs-schedule>
    </div>
  </div>`,
  encapsulation: ViewEncapsulation.None,
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService,
  ],
})
export class AppComponent {
  @ViewChild('scheduleObj') public scheduleObj?: ScheduleComponent;

  dataBound(eventData: any) {

    if (initialLoad) {
      let elements:HTMLElement=this.scheduleObj?.element.querySelector('.e-all-day-appointment-section') as HTMLElement;
      elements.click();
      initialLoad = false;
    }
  }
  public data: object[] = [
    {
      EndTime: new Date(2022, 4, 4, 0, 0),
      Id: '1',
      IsAllDay: true,
      StartTime: new Date(2022, 4, 2, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Install Bullnose Brick/ Coping | Jones | 3521',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '2',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 29, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Plumbing Checklist | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 4, 7, 0, 0),
      Id: '3',
      IsAllDay: true,
      StartTime: new Date(2022, 4, 2, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Waterline Tile | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '4',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 28, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Underground Plumbing | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 4, 4, 0, 0),
      Id: '5',
      IsAllDay: true,
      StartTime: new Date(2022, 4, 3, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Backfill/ Compaction | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 4, 7, 0, 0),
      Id: '6',
      IsAllDay: true,
      StartTime: new Date(2022, 4, 4, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Install Bullnose Brick/ Coping | Jaimungal | 3671 :: Pool',
    },
    {
      EndTime: new Date(2022, 4, 1, 0, 0),
      Id: '7',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 30, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Steel/ Checklist | VP Highland Model | 3719 :: Pool',
    },
    {
      Description:
        'Let Yves know I did not see skimmer southern gunite did shell',
      EndTime: new Date(2022, 4, 4, 0, 0),
      Id: '8',
      IsAllDay: true,
      StartTime: new Date(2022, 4, 3, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Shotcrete Shell | VP Highland Model | 3719 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '9',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 29, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Tile Selections/ Pavers/ Finish | VP Highland Model | 3719 :: Pool',
    },
    {
      EndTime: new Date(2022, 3, 30, 0, 0),
      Id: '10',
      IsAllDay: true,
      StartTime: new Date(2022, 3, 26, 0, 0),
      Subject:
        '<i class="fas fa-truck-pickup"></i> | Layout/ Form Rebar Shell | VP Highland Model | 3719 :: Pool',
    },
  ];
  public selectedDate: Date = new Date(2022, 3, 26);
  public eventSettings = {
    dataSource: this.data,
  };
}


