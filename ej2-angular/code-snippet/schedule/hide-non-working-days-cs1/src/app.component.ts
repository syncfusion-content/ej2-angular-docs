import { Component } from '@angular/core';
import {
  WeekService, MonthService, AgendaService, EventSettingsModel, GroupModel
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: "app-root",
  providers: [WeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component
  template: `
    <ejs-schedule width="100%" height="550px" [views]="views" [group]='group'>
      <e-resources>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleOwner"
          textField='text' idField='id' colorField='color' [workDaysField]='workDays'>
        </e-resource>
      </e-resources>
    </ejs-schedule>`
})
export class AppComponent {
  public views: Array<string> = ['Week', 'Month', 'Agenda'];
  public group: GroupModel = {
    byDate: true,
    hideNonWorkingDays: true,
    resources: ['Owners']
  };
  public allowMultipleOwner: Boolean = true;
  public ownerDataSource: Object[] = [
    { text: 'Alice', id: 1, color: '#1aaa55', workDays: [1, 2, 3, 4] },
    { text: 'Smith', id: 2, color: '#7fa900', workDays: [2, 3, 5] }
  ];
workDays: any;
}