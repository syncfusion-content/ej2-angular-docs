import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [splitterSettings]="splitterSettings" [taskFields]="taskSettings" [treeColumnIndex]="1">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="date"></e-column>
        <e-column field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" type="number"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120" type="number"></e-column>
        <e-column field="Verified" headerText="Verified" width="100" type="boolean" displayAsCheckBox="true"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
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
      dependency: 'Predecessor',
      child: 'subtasks',
      Verified: 'Verified'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
}
