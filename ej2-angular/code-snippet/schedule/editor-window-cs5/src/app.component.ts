import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel,PopupOpenEventArgs, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { eventsData} from './datasource';
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
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]='selectedDate' [views]='views' [eventSettings]='eventSettings' (popupOpen)='onPopupOpen($event)'></ejs-schedule>`
})


export class AppComponent {
    @ViewChild("scheduleObj")
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 1, 15);
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
    public eventSettings: EventSettingsModel = {
        dataSource: eventsData
    };
    onPopupOpen(args: PopupOpenEventArgs): void {
        if (args.type === 'Editor') {
            let dialog = (args.element as any).ej2_instances[0];
            dialog.open = function(args : any) {
                this.scheduleObj.eventBase.focusElement();
            };
        }
    }
 }


