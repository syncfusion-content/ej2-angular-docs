import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component, ViewChild } from '@angular/core';
import { ScheduleComponent, EventSettingsModel, View, DayService, DragAndDropService,
  WeekService, WorkWeekService, MonthService, AgendaService, ICalendarExportService, ICalendarImportService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { scheduleData } from './datasource';
import { SelectedEventArgs } from '@syncfusion/ej2-inputs';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule,
        UploaderModule
    ],

providers: [DayService, 
                WeekService, 
                WorkWeekService, 
                MonthService,
                AgendaService,
                MonthAgendaService],
standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService,
    ICalendarExportService, ICalendarImportService, DragAndDropService],
  // specifies the template string for the Schedule component
  template: `<ejs-uploader id='ics-import' cssClass='calendar-import' [multiple]='multiple' [buttons]='buttons'
    [showFileList]='showFileList' allowedExtensions='.ics' (selected)='onSelected($event)'></ejs-uploader>
<ejs-schedule #scheduleObj width='100%' height='550px' [views]="scheduleViews" [selectedDate]="selectedDate" [eventSettings]="eventSettings" [currentView]="currentView" >
  <e-views><e-view option='Week' ></e-view></e-views></ejs-schedule>`
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public scheduleViews: View[] = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];
  public eventSettings: EventSettingsModel = { dataSource: scheduleData };
  public currentView: View = 'Week';
  public showFileList: Boolean = false;
  public multiple: Boolean = false;
  public buttons: Object = { browse: 'Choose file' };

  public onSelected(args: SelectedEventArgs): void {
    this.scheduleObj?.importICalendar(((<HTMLInputElement>args.event.target) as any).files[0]);
  }
 }


