import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { ChangeEventArgs, SwitchModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, SwitchModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-bottom:20px">
      <label style="padding: 10px 10px">Enable or disable visible property</label>
      <ejs-switch id="switch" (change)="change($event)"></ejs-switch>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [treeColumnIndex]="1">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" [visible]="false"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="150"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public change(args: ChangeEventArgs) {
    if (args.checked) {
      (this.ganttInstance as GanttComponent).treeGrid.getColumnByField('Duration').visible = true;
    } else {
      (this.ganttInstance as GanttComponent).treeGrid.getColumnByField('Duration').visible = false;
    }
    (this.ganttInstance as GanttComponent).treeGrid.refreshColumns();
  }
}