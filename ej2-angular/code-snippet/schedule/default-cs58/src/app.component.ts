

import { Component } from '@angular/core';
import { TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel, RenderCellEventArgs } from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';

@Component({
    selector: "app-root",
    providers: [TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views" currentView='TimelineWeek'
      [eventSettings]="eventSettings" [group]='group' (renderCell)="onRenderCell($event)">
      <e-resources>
        <e-resource field="RoomId" title="Room" name="Rooms"
          [dataSource]="roomDataSource" [allowMultiple]="allowMultipleRoom"
          textField='text' idField='id' colorField='color'></e-resource>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleOwner"
          textField='text' idField='id' colorField='color' groupIDField='groupId'></e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 4);
    public views: Array<string> = ['TimelineDay', 'TimelineWeek', 'TimelineMonth'];
    public eventSettings: EventSettingsModel = { dataSource: resourceData };
    public group: GroupModel = { resources: ['Rooms', 'Owners'] };
    public allowMultipleRoom: Boolean = false;
    public allowMultipleOwner: Boolean = true;
    public roomDataSource: Object[] = [
      { text: 'ROOM 1', id: 1, color: '#cb6bb2' },
      { text: 'ROOM 2', id: 2, color: '#56ca85' }
    ];
    public ownerDataSource: Object[] = [
      { text: 'Nancy', id: 1, groupId: 1, color: '#ffaa00' },
      { text: 'Steven', id: 2, groupId: 2, color: '#f8a398' },
      { text: 'Michael', id: 3, groupId: 1, color: '#7499e1' }
    ];
    public onRenderCell(args: RenderCellEventArgs): void {
      if (args.elementType == 'resourceGroupCells' && args.element.className.indexOf('e-work-hours') > 0) {
        (args.element as any).style.background = "#FAFAE3";
      }
    }
}


