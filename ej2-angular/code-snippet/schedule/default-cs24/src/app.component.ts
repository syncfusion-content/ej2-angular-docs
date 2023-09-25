

import { Component, ViewEncapsulation } from '@angular/core';
import { EventSettingsModel, RenderCellEventArgs, DayService, WeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import { createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' currentView='Month' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (renderCell)="onRenderCell($event)">
  <e-views> <e-view option="Day"></e-view> <e-view option="Week"></e-view> <e-view option="Month"></e-view> </e-views> </ejs-schedule>`,
  styleUrls: ['./index.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 14);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  onRenderCell(args: RenderCellEventArgs): void {
    if (args.elementType == 'workCells' || args.elementType == 'monthCells') {
      let weekEnds: number[] = [0, 6];
      if (args.date && weekEnds.indexOf((args.date).getDay()) >= 0) {
        let ele: HTMLElement = createElement('div', {
          innerHTML: "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />",
          className: 'templatewrap'
        });
        (args.element).appendChild(ele);
      }
    }
  }
}


