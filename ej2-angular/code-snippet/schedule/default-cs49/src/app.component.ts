import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent, CellClickEventArgs, EventClickArgs } from '@syncfusion/ej2-angular-schedule';
import { schedulerData } from './datasource';

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
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" [showQuickInfo]="showQuickInfo" (cellClick)="onCellClick($event)" (eventClick)="onEventClick($event)" > <e-views> <e-view option="Week"></e-view> <e-view option="WorkWeek"></e-view> <e-view option="Month"></e-view> <e-view option="Day"></e-view> </e-views> </ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2021, 7, 15);
    public eventSettings: EventSettingsModel = { dataSource: schedulerData };
    public showQuickInfo: Boolean = false;
    onCellClick(args: CellClickEventArgs): void {
        this.scheduleObj?.openEditor(args, 'Add');
    }
    onEventClick(args: EventClickArgs): void {
        if (!(args.event as any).RecurrenceRule) {
        this.scheduleObj?.openEditor(args.event, 'Save');
        }
        else {
        this.scheduleObj?.quickPopup.openRecurrenceAlert();
        }
    }
}


