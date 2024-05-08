import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent} from '@syncfusion/ej2-angular-schedule';
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
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings" (created)="onCreated($event)">
</ejs-schedule>`
})

export class AppComponent {
  @ViewChild('scheduleObj') public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: scheduleData, enableTooltip: true };

  public onCreated(eventData: any): void {
    // Assigning the tooltip object to the tooltipObj variable.
    let tooltipObj =(this.scheduleObj?.element as any).ej2_instances[2];
    // Disable the tooltip to follow the mouse pointer position
    tooltipObj.mouseTrail = false;
    // Setting tooltip open delay
    tooltipObj.openDelay = 1000;
    // Setting the position to the tooltip
    tooltipObj.position = "TopCenter";
  }
}


