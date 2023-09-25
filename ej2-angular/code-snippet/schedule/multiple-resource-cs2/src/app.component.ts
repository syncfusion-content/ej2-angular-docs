

import { Component, ViewChild } from "@angular/core";
import {
   ScheduleComponent, WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel, GroupModel
} from "@syncfusion/ej2-angular-schedule";
import { ChangeArgs } from "@syncfusion/ej2-buttons";
import { resourceData } from "./datasource";
@Component({
  selector: "app-root",
  providers: [WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService],
  // specifies the template string for the Schedule component
  template: `<div style="padding: 10px;"><ejs-radiobutton label="Rooms" name="default" value="Rooms" checked="true" (change)="onChange($event)"></ejs-radiobutton>
  <ejs-radiobutton label="Owners" name="default" value="Owners" (change)="onChange($event)"></ejs-radiobutton>
  </div>
    <ejs-schedule #scheduleObj width="100%" height="550px" [selectedDate]="selectedDate" [views]="views"
      [currentView]="currentView" [eventSettings]="eventSettings" [group]="group">
      <e-resources>
        <e-resource field="RoomId" title="Room" name="Rooms" [dataSource]="roomDataSource"
          textField="RoomText" idField="Id" colorField="RoomColor">
        </e-resource>
        <e-resource field="OwnerId" title="Owner" name="Owners"
          [dataSource]="ownerDataSource" [allowMultiple]="allowMultipleCategory"
          textField="OwnerText" idField="Id" groupIDField="OwnerGroupId" colorField="OwnerColor">
        </e-resource>
      </e-resources>
    </ejs-schedule>
  `
})
export class AppComponent {
  @ViewChild('scheduleObj')
  public scheduleObj?: ScheduleComponent;
  public selectedDate: Date = new Date(2018, 3, 1);
  public views: Array<string> = ["Week", "Month", "TimelineWeek", "TimelineMonth", "Agenda"];
  public eventSettings: EventSettingsModel = {
    dataSource: resourceData,
    resourceColorField: 'Rooms'
  };
  public group: GroupModel = {
    resources: ["Rooms", "Owners"]
  };
  public roomDataSource: Object[] = [
    { RoomText: "ROOM 1", Id: 1, RoomColor: "#cb6bb2" },
    { RoomText: "ROOM 2", Id: 2, RoomColor: "#56ca85" }
  ];
  public allowMultipleOwner: Boolean = true;
  public ownerDataSource: Object[] = [
    { OwnerText: "Nancy", Id: 1, OwnerGroupId: 1, OwnerColor: "#ffaa00" },
    { OwnerText: "Steven", Id: 2, OwnerGroupId: 2, OwnerColor: "#f8a398" },
    { OwnerText: "Michael", Id: 3, OwnerGroupId: 1, OwnerColor: "#7499e1" }
  ];
currentView: any;
allowMultipleCategory: any;
  public onChange(args: ChangeArgs): void {
    this.scheduleObj!.eventSettings.resourceColorField = args.value;
  }
}


