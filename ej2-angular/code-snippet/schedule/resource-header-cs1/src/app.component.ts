

import { Component } from '@angular/core';
import {
    WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { doctorData } from './datasource';
@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
        <e-resources>
            <e-resource field="DoctorId" title="Doctor Name" name="Doctors"
            [dataSource]="doctorDataSource"
            textField='text' idField='id' colorField='color' designationField='designation'>
            </e-resource>
        </e-resources>
        <ng-template #resourceHeaderTemplate let-data>
            <div class='template-wrap'>
                <div class="resource-details">
                    <div class="resource-name">{{data.resourceData.text}}</div>
                    <div class="resource-designation">{{data.resourceData.designation}}</div>
                </div>
            </div>
        </ng-template>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 5);
    public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: doctorData
    };
    public group: GroupModel = {
        resources: ['Doctors']
    };
    public allowMultipleDoctors: Boolean = true;
    public doctorDataSource: Object[] = [
        { text: 'Will Smith', id: 1, color: '#ea7a57', designation: 'Cardioligst' },
        { text: 'Alice', id: 2, color: '#7fa900', designation: 'Neurologist' },
        { text: 'Robson', id: 3, color: '#7fa900', designation: 'Orthopedic Surgeon'  }
    ];
}


