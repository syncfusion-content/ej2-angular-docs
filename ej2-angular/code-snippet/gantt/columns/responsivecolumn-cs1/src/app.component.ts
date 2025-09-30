import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowResizing]="true">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>

        <!-- Column hides when screen width is less than 700px -->
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290" hideAtMedia="(min-width: 700px)"></e-column>

        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>

        <!-- Column shows only when screen width is less than or equal to 500px -->
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90" hideAtMedia="(max-width: 500px)"></e-column>

        <e-column field="Progress" headerText="Progress" textAlign="Right" width="150"></e-column>
      </e-columns>
    </ejs-gantt> `,
  encapsulation: ViewEncapsulation.None
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
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
}
