import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [labelSettings]="labelSettings" [taskFields]="taskSettings" [frozenColumns]="2" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [gridLines]="gridLines" [allowSelection]="false">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="EndDate" headerText="End Date" textAlign="Right" width="120"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Left" width="120"></e-column>
        <e-column field="Predecessor" headerText="Predecessor" textAlign="Left" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public gridLines?: string;
  public labelSettings: any;
  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      endDate: 'EndDate',
      dependency:'Predecessor',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.labelSettings={
        taskLabel: 'Progress'
    }
    this.gridLines = 'Both';
    this.splitterSettings = {
      position: '65%'
    };
  }
}