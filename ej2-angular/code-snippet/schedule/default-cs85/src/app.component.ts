

import { Component } from '@angular/core';
import { EventSettingsModel, TimelineYearService, GroupModel } from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';

@Component({
  selector: 'app-root',
  providers: [TimelineYearService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings">
      <e-views>
        <e-view option='TimelineYear' displayName='Horizontal Timeline Year' isSelected=true></e-view>
        <e-view option='TimelineYear' displayName='Vertical Timeline Year' orientation='Vertical' [group]="groupSettings"></e-view>
      </e-views>
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleOwner"
          textField="OwnerText" idField="Id" colorField="OwnerColor">
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    public selectedDate: Date = new Date(2018, 3, 1);
    public views: Array<string> = ['TimelineYear'];
    public eventSettings: EventSettingsModel = {
        dataSource: resourceData
    };
    public groupSettings: GroupModel = { resources: ['Owners'] };
    public allowMultipleOwner: Boolean = true;
    public ownerDataSource: Object[] = [
        { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
        { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
        { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
    ];
}


