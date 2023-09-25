

import { Component } from '@angular/core';
import {
    WeekService, MonthService, AgendaService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { resourceConferenceData } from './datasource';

@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="ProjectId" title="Choose Project" name="Projects"
            [dataSource]="projectDataSource"
            textField="text" idField="id" colorField="color">
        </e-resource>
        <e-resource field="TaskId" title="Category" name="Categories"
          [dataSource]="categoryDataSource" [allowMultiple]="allowMultipleCategory"
          textField="text" idField="id" colorField="color">
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'Month', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: resourceConferenceData
    };
    public group: GroupModel = {
        byGroupID: false,
        resources: ['Projects', 'Categories']
    };
    public projectDataSource: Object[] = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
    ];
    public allowMultipleCategory: Boolean = true;
    public categoryDataSource: Object[] = [
        { text: 'Development', id: 1, color: '#df5286' },
        { text: 'Testing', id: 2, color: '#7fa900' }
    ];
}


