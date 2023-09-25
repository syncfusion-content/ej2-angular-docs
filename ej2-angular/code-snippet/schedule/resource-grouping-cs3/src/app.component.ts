

import { Component } from '@angular/core';
import {
    WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService, ResizeService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService, ResizeService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="ConferenceId" title="Conference" name="Conferences"
          [dataSource]="conferenceDataSource" [allowMultiple]="allowMultipleCategory"
          textField='Text' idField='Id' colorField='Color'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 5, 5);
    public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: [
            {
                Id: 1,
                Subject: 'Burning Man',
                StartTime: new Date(2018, 5, 1, 15, 0),
                EndTime: new Date(2018, 5, 1, 17, 0),
                ConferenceId: [1, 2, 3]
            }, {
                Id: 2,
                Subject: 'Data-Driven Economy',
                StartTime: new Date(2018, 5, 2, 12, 0),
                EndTime: new Date(2018, 5, 2, 14, 0),
                ConferenceId: [1, 2]
            }, {
                Id: 3,
                Subject: 'Techweek',
                StartTime: new Date(2018, 5, 2, 15, 0),
                EndTime: new Date(2018, 5, 2, 17, 0),
                ConferenceId: [2, 3]
            }, {
                Id: 4,
                Subject: 'Content Marketing World',
                StartTime: new Date(2018, 5, 2, 18, 0),
                EndTime: new Date(2018, 5, 2, 20, 0),
                ConferenceId: [1, 3]
            }, {
                Id: 5,
                Subject: 'B2B Marketing Forum',
                StartTime: new Date(2018, 5, 3, 10, 0),
                EndTime: new Date(2018, 5, 3, 12, 0),
                ConferenceId: [1, 2, 3]
            }]
    };
    public group: GroupModel = {
        allowGroupEdit: true,
        resources: ['Conferences']
    };
    public allowMultipleCategory: Boolean = true;
    public conferenceDataSource: Object[] = [
        { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
        { Text: 'Robert', Id: 2, Color: '#357cd2' },
        { Text: 'Laura', Id: 3, Color: '#7fa900' }
    ];
}


