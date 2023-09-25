

import { Component } from '@angular/core';
import {
    TimelineViewsService, TimelineMonthService, AgendaService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';

@Component({
    selector: "app-root",
    providers: [TimelineViewsService, TimelineMonthService, AgendaService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [currentView]='currentView' [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="RoomId" title="Room" name="Rooms"
            [dataSource]="roomDataSource"
            textField="RoomText" idField="Id" colorField="RoomColor">
        </e-resource>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleCategory"
          textField='OwnerText' idField='Id' groupIDField='OwnerGroupId' colorField='OwnerColor'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 4);
    public currentView: string = 'TimelineWeek';
    public views: Array<string> = ['TimelineWeek', 'TimelineMonth', 'Agenda'];
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public group: GroupModel = {
        resources: ['Rooms', 'Owners']
    };
    public roomDataSource: Object[] = [
        { RoomText: 'ROOM 1', Id: 1, RoomColor: '#cb6bb2' },
        { RoomText: 'ROOM 2', Id: 2, RoomColor: '#56ca85' }
    ];
    public allowMultipleOwner: Boolean = true;
    public ownerDataSource: Object[] = [
        { OwnerText: 'Nancy', Id: 1, OwnerGroupId: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerGroupId: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerGroupId: 1, OwnerColor: '#7499e1' }
    ];
allowMultipleCategory: any;
}


