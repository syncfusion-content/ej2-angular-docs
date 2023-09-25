

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    ScheduleComponent, EventSettingsModel, GroupModel,
    DayService, WeekService, MonthService, DragAndDropService, View
} from '@syncfusion/ej2-angular-schedule';
import { extend } from '@syncfusion/ej2-base';
import { resourceData,  resourceConferenceData } from './datasource';

@Component({
    selector: "app-root",
    providers: [DayService, WeekService, MonthService, DragAndDropService],
    // specifies the template string for the Schedule component
    template: `
    <ejs-schedule #scheduleObj id="schedule" width='100%' height='650px' [group]="group" [(currentView)]="currentView"
      [selectedDate]="selectedDate" [enableAdaptiveUI]="true" [eventSettings]="eventSettings">
      <e-views>
        <e-view option="Day"></e-view>
        <e-view option="Week"></e-view>
        <e-view option="Month"></e-view>
      </e-views>
      <e-resources>
        <e-resource field='ProjectId' title='Choose Project' [dataSource]='projectDataSource'
          [allowMultiple]='allowMultiple' name='Projects' textField='text' idField='id' colorField='color'>
        </e-resource>
        <e-resource field='TaskId' title='Category' [dataSource]='categoryDataSource' [allowMultiple]='allowMultiple'
          name='Categories' textField='text' idField='id' groupIDField='groupId' colorField='color'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
    @ViewChild('scheduleObj')
    public scheduleObj?: ScheduleComponent;
    public selectedDate: Date = new Date(2018, 3, 4);
    public currentView: View = 'Month';
    public group: GroupModel = {
        resources: ['Projects', 'Categories']
    };
    public projectDataSource: Object[] = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
    ];
    public categoryDataSource: Object[] = [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
        { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
        { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
        { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
    ];
    public allowMultiple: Boolean = true;
    public eventSettings: EventSettingsModel = {
        dataSource: <Object[]>extend([], resourceData.concat( resourceConferenceData), undefined, true)
    };
}


