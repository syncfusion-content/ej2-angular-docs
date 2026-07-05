import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `<ejs-gantt height="370px" [dataSource]="data" [splitterSettings]="splitterSettings" [taskFields]="taskSettings">
    <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="100"></e-column>
        <e-column field="TaskName" headerText="Task Name"></e-column>
        <e-column field="StartDate" headerText="Start Date"></e-column>
        <e-column field="Duration" headerText="Duration"></e-column>
        <e-column field="Progress" headerText="Progress"></e-column>
    </e-columns>
</ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
}
