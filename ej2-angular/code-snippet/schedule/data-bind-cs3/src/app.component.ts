import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'



import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

class CustomAdaptor extends ODataV4Adaptor {
    override processResponse(): Object {
        let i: number = 0;
        // calling base class processResponse function
        let original: any = super.processResponse.apply(this, arguments as any);
        // adding employee id
        original.forEach((item: any) => item['EventID'] = ++i);
        return  original;
    }
}

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
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [readonly]="readonly" [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})

export class AppComponent {
    public readonly: boolean = true;
    public selectedDate: Date = new Date(1996, 6, 9);
    private dataManager: DataManager = new DataManager({
       url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
       adaptor: new CustomAdaptor
    });
    public eventSettings: EventSettingsModel = {
        dataSource: this.dataManager, fields: {
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


