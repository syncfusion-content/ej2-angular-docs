import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'




import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule
    ],
standalone: true,
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [readonly]="readonly" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})

export class AppComponent {
    public readonly: boolean = true;
    public selectedDate: Date = new Date(2017, 5, 11);
    private dataManager: DataManager = new DataManager({
       url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
       adaptor: new ODataV4Adaptor
    });
    private dataQuery: Query = new Query().from("Events").addParams('readOnly', 'true');
    public eventSettings: EventSettingsModel = { dataSource: this.dataManager, query: this.dataQuery };
}


