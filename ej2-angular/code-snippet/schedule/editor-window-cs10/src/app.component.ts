import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
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
    template: `<ejs-schedule width='100%' height='550px' [views]='views' [quickInfoOnSelectionEnd]='showQuickInfoOnSelectionEnd'></ejs-schedule>`
})


export class AppComponent {
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public showQuickInfoOnSelectionEnd: Boolean = true;
}


