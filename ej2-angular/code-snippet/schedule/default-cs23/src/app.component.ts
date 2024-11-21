import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, ViewEncapsulation } from '@angular/core';
import { View, DayService, WeekService, TimelineViewsService, MonthService, WorkWeekService, AgendaService, MonthAgendaService  } from '@syncfusion/ej2-angular-schedule';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],
standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, TimelineViewsService, MonthService, WorkWeekService, AgendaService,
    MonthAgendaService ],
  // specifies the template string for the Schedule component
   template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [(currentView)]="currentView" cssClass="schedule-cell-template">
    <ng-template #cellTemplate let-data>
      <div class="templatewrap" *ngIf="data.type == 'workCells'" [innerHTML]="getWorkCellText(data.date)"></div>
      <div class="templatewrap" *ngIf="data.type == 'monthCells'" [innerHTML]="getMonthCellText(data.date)"></div>
    </ng-template>
  </ejs-schedule>`,
  styles: [`
  .schedule-cell-template.e-schedule .e-month-view .e-work-cells {
    position: relative;
  }
  .templatewrap {
  text-align: center;
  /* In MONTH view the cell template is a SIBLING of event templates. So which is necessary to set the parent position relative and the child position absolute with 100% width */
  position: absolute;
  width: 100%;
}

.templatewrap img {
  width: 20px;
  height: 20px;
}
`],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public selectedDate: Date = new Date(2017, 11, 16);
    public currentView: View = 'Week';
    getMonthCellText(date: Date): string {
      if (date.getMonth() === 10 && date.getDate() === 23) {
        return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
      } else if (date.getMonth() === 11 && date.getDate() === 9) {
          return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/get-together.svg" />';
      } else if (date.getMonth() === 11 && date.getDate() === 13) {
          return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
      } else if (date.getMonth() === 11 && date.getDate() === 22) {
          return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/thanksgiving-day.svg" />';
      } else if (date.getMonth() === 11 && date.getDate() === 24) {
          return '<img src="https://ej2.syncfusion.com/demos/src/schedule/images/christmas-eve.svg" />';
      } else if (date.getMonth() === 11 && date.getDate() === 25) {
          return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/christmas.svg" />';
      } else if (date.getMonth() === 0 && date.getDate() === 1) {
          return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg" />';
      } else if (date.getMonth() === 0 && date.getDate() === 14) {
          return '<img src= "https://ej2.syncfusion.com/demos/src/schedule/images/birthday.svg" />';
      }
      return '';
    }
    getWorkCellText(date: Date): string {
        let weekEnds: number[] = [0, 6];
        if (weekEnds.indexOf(date.getDay()) >= 0) {
            return "<img src='https://ej2.syncfusion.com/demos/src/schedule/images/newyear.svg' />";
        }
        return '';
    }
 }


