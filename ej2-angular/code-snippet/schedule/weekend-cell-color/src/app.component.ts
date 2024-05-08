import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'



import { Component, ViewEncapsulation } from '@angular/core';
import {
  EventSettingsModel, View, RenderCellEventArgs, DayService, WeekService, WorkWeekService,
  MonthService, AgendaService, ResizeService, DragAndDropService, ScheduleModule
} from '@syncfusion/ej2-angular-schedule';
import { defaultData } from './datasource';

@Component({
imports: [
        
        ScheduleModule
    ],
standalone: true,
  selector: 'app-root',
  providers: [View, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='650px' cssClass='schedule-cell-customization' [selectedDate]="selectedDate" [eventSettings]="eventSettings"
  [(currentView)]="currentView" (renderCell)="onRenderCell($event)"></ejs-schedule>`,
  styles: [
    `.schedule-cell-customization.e-schedule .e-month-view .e-work-cells:not(.e-work-days) {
        background-color: #f08080;
      }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public selectedDate: Date = new Date(2021, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: defaultData };
  public currentView: View = 'Week';

  public onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType == "workCells") {
      // To change the color of weekend columns in week view
      if (args.date) {
        if (args.date.getDay() === 6) {
          (args.element as any).style.background = '#ffdea2';
        }
        if (args.date.getDay() === 0) {
          (args.element as any).style.background = '#ffdea2';
        }
      }
    }
  }
}