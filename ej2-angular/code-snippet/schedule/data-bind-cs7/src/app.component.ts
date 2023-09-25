

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
  public selectedDate: Date = new Date(1996, 6, 9);
  private dataManager: DataManager = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = {
    includeFiltersInQuery: true, dataSource: this.dataManager, fields: {
      id: 'Id',
      subject: { name: 'ShipName' },
      location: { name: 'ShipCountry' },
      description: { name: 'ShipAddress' },
      startTime: { name: 'OrderDate' },
      endTime: { name: 'RequiredDate' },
      recurrenceRule: { name: 'ShipRegion' }
    }
  };
}

