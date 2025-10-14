import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, ResizeService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [GanttModule],
  providers: [ResizeService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [allowResizing]="true" (dataBound)="dataBound()">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" format="yMd" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt> `
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
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
      child: 'subtasks',
    };
    this.splitterSettings = {
      position: '75%',
    };
  }

  dataBound(): void {
    this.ganttInstance?.treeGrid.autoFitColumns(['TaskName']);
  }
}
