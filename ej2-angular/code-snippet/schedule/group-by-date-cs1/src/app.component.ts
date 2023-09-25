

import { Component } from '@angular/core';
import {
    WeekService, MonthService, AgendaService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';

@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleOwner"
          textField='text' idField='id' colorField='color'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'Month', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public group: GroupModel = {
        byDate: true,
        resources: ['Owners']
    };
    public allowMultipleOwner: Boolean = true;
    public ownerDataSource: Object[] = [
        { text: 'Alice', id: 1, color: '#1aaa55' },
        { text: 'Smith', id: 2, color: '#7fa900' }
    ];
}


