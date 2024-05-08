import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
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
  template: `<ejs-schedule width='100%' height='550px' [enableRtl]='enableRtl'
  [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 1, 15);
    public enableRtl: boolean = true;
    public views: Array<string> = ['Day', 'Week', 'WorkWeek'];
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
 }


