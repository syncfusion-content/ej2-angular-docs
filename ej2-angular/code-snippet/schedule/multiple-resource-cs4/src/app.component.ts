

import { Component } from '@angular/core';
import {
    WeekService, MonthService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { doctorData } from './datasource';
@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="DoctorId" title="Conference" name="Conferences"
          [dataSource]="conferenceDataSource" [allowMultiple]="allowMultipleCategory"
          textField='text' idField='id' colorField='color' startHourField='startHour' endHourField='endHour'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth'];
    public eventSettings: EventSettingsModel = {
        dataSource: doctorData
    };
    public group: GroupModel = {
        resources: ['Conferences']
    };
    public allowMultipleCategory: Boolean = true;
    public conferenceDataSource: Object[] = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', startHour: '08:00', endHour: '15:00' },
        { text: 'Alice', id: 2, color: '#357cd2', startHour: '10:00', endHour: '18:00' },
        { text: 'Robson', id: 3, color: '#7fa900', startHour: '06:00', endHour: '13:00' }
    ];
}


