

import { Component } from '@angular/core';
import {
    WeekService, WorkWeekService, MonthService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { doctorData } from './datasource';
@Component({
    selector: "app-root",
    providers: [WeekService, WorkWeekService, MonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [currentView]='currentView' [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="DoctorId" title="Conference" name="Conferences"
          [dataSource]="conferenceDataSource" [allowMultiple]="allowMultipleCategory"
          textField='text' idField='id' colorField='color' workDaysField='workDays'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'WorkWeek', 'Month'];
    public currentView: string = 'WorkWeek';
    public eventSettings: EventSettingsModel = {
        dataSource: doctorData
    };
    public group: GroupModel = {
        resources: ['Conferences']
    };
    public allowMultipleCategory: Boolean = true;
    public conferenceDataSource: Object[] = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', workDays: [1, 2, 4, 5] },
        { text: 'Alice', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5] },
        { text: 'Robson', id: 3, color: '#7fa900' , workDays: [2,6]}
    ];
}


