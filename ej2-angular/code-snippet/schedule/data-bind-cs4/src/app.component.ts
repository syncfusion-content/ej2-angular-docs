

import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
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


