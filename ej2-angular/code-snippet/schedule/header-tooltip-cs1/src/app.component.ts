

import { Component } from '@angular/core';
import {
    WeekService, MonthService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel } from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';
@Component({
    selector: "app-root",
    providers: [WeekService, MonthService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
        <e-resources>
            <e-resource field="OwnerId" title="Owner" name="Owners"
            [dataSource]="roomDataSource" [allowMultiple]='allowMultipleRoom'
            textField='OwnerText' idField='Id' groupIdField='OwnerGroupId' colorField='OwnerColor'>
            </e-resource>
        </e-resources>
        <ng-template #groupHeaderTooltipTemplate let-data>
            <div class='template-wrap'>
                <div class="res-text">Name:  {{data.resourceData.OwnerText}} </div>
            </div>
        </ng-template>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['Week', 'Month', 'TimelineWeek', 'TimelineMonth'];
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public group: GroupModel = {
        resources: ['Owners']
    };
    public allowMultipleRoom: Boolean = true;
    public roomDataSource: Object[] = [
        { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
    ];
}


