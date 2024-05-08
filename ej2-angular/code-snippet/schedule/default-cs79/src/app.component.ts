import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { EventSettingsModel, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
  selector: 'app-root',
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" >
      <e-views>
        <e-view option='MonthAgenda' [showWeekend]="showWeekend" [workDays]="workDays"></e-view>
      </e-views>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 14);
    public showWeekend: boolean = false;
    public workDays: number[] = [1, 2, 3];
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


