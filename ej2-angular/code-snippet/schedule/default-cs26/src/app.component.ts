import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
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
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [minDate]='minDate' [maxDate]='maxDate' [currentView]='currentView' [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 1, 17);
  public minDate: Date = new Date(2017, 4, 17);
  public maxDate: Date = new Date(2018, 8, 17);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public currentView: View = 'Month';
}



