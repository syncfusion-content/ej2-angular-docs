import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent,EventSettingsModel, ActionEventArgs } from '@syncfusion/ej2-angular-schedule';
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
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (actionBegin)="onActionBegin($event)"></ejs-schedule>`
})
export class AppComponent {
    @ViewChild("scheduleObj")
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: scheduleData };
    public onActionBegin(args: ActionEventArgs): void {
        if (args.requestType == 'eventChange') {
            const weekEnds: number[] = [0, 6];
            const data: { [key: string]: Object } = args.data as { [key: string]: Object };
            const weekDay: boolean = weekEnds.indexOf((data['StartTime'] as Date).getDay()) >= 0;
            const workHours: boolean = ((parseInt(this.scheduleObj!.workHours.start!.toString().slice(0, 2), 10) <= (data['StartTime'] as Date).getHours()) && (parseInt(this.scheduleObj!.workHours.end!.toString().slice(0, 2), 10)) >= (data['StartTime'] as Date).getHours());
            if (weekDay || !workHours) {
                args.cancel = true;
            }
        }
    }
}


