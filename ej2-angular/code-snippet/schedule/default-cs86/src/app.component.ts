import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { EventSettingsModel, TimelineYearService } from '@syncfusion/ej2-angular-schedule';
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
                MonthAgendaService,
                TimelineYearService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [rowAutoHeight]='rowAutoHeight' [eventSettings]='eventSettings'>
  <e-views>
        <e-view option='TimelineYear' displayName='Horizontal Timeline Year' isSelected=true></e-view>
        <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical'></e-view>
  </e-views>
  </ejs-schedule>`
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 5, 17);
  public rowAutoHeight: boolean = true;
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
}


