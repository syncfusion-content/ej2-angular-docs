

import { Component } from '@angular/core';
import { EventSettingsModel, RenderCellEventArgs, DayService, WeekService, WorkWeekService, MonthService, View } from '@syncfusion/ej2-angular-schedule';
import { removeClass } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (renderCell)="onRenderCell($event)"  [(currentView)]="currentView" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public currentView: View = 'WorkWeek';
    onRenderCell(args: RenderCellEventArgs): void {
        if(args.elementType === "dateHeader") {
            removeClass(args.element.childNodes, "e-navigate");
        }
    }
}


