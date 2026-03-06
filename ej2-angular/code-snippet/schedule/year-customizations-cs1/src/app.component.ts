import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component, ViewEncapsulation } from '@angular/core';
import {
  ScheduleComponent, EventSettingsModel, EventRenderedArgs, YearService, TimelineYearService, GroupModel, ResizeService, DragAndDropService,MonthAgendaService, DayService, WeekService, WorkWeekService, MonthService, AgendaService
} from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';

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
                MonthAgendaService,
                YearService, TimelineYearService, ResizeService, DragAndDropService],
standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public selectedDate: Date = new Date(2021, 7, 4);
    public firstMonthOfYear: number = 6;
    public monthsCount: number = 6;
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public group: GroupModel = {
        resources: ['Owners']
    };
    public ownerDataSource: Object[] = [
        { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Robert', Id: 3, OwnerColor: '#7499e1' },
        { OwnerText: 'Smith', Id: 4, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 5, OwnerColor: '#f8a398' }
    ];
currentView: any;
isSelected: any;
groupSettings: any;
views: any;
    public getMonthHeaderText(date: Date): string {
        return date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getFullYear();
  }
}



