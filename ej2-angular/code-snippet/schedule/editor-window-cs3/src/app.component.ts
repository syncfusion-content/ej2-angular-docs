import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import { scheduleData} from './datasource';
@Component({
imports: [
        
        ScheduleModule,
        TimePickerModule
    ],


standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings'></ejs-schedule>`
})


export class AppComponent {
    minValidation: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
        return args['value'].length >= 5;
    };
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: scheduleData,
        fields: {
            id: 'Id',
            subject: { name: 'Subject', validation: { required: true } },
            location: { name: 'Location', validation: { required: true } },
            description: {
                name: 'Description', validation: {
                    required: true, minLength: [this.minValidation, 'Need atleast 5 letters to be entered']
                }
            },
            startTime: { name: 'StartTime', validation: { required: true } },
            endTime: { name: 'EndTime', validation: { required: true } }
        }
    };
 }


