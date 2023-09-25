

import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { EventSettingsModel, DayService, WeekService, GroupModel, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './datasource';
@Component({
    selector: 'app-root',
    providers: [DayService, WeekService, TimelineViewsService, TimelineMonthService],
    // specifies the template string for the Schedule component
    template: `<ejs-schedule  #scheduleObj  width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [eventSettings]="eventSettings" [group]='group'>
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleOwner"
          textField='OwnerText' idField='Id' colorField='OwnerColor'>
        </e-resource>
      </e-resources>
      <ng-template #headerIndentTemplate let-data>
        <div class='e-resource-text'>
          <div class="text">Resources</div>
      </div>
    </ng-template>
    </ejs-schedule>`,
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {
  public selectedDate: Date = new Date(2018, 3, 1);
  public views: Array<string> = ['Day', 'Week', 'TimelineWeek', 'TimelineMonth'];
  public eventSettings: EventSettingsModel = {
      dataSource: resourceData
  };
  public group: GroupModel = {
      resources: ['Owners']
  };
  public allowMultipleOwner: Boolean = true;
  public ownerDataSource: Object[] = [
      { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
      { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
      { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
  ];
}


