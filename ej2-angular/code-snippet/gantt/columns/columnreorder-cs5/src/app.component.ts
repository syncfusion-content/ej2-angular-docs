import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, ReorderService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [ReorderService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-bottom: 20px;">
      <button ejs-button id="reorderByIndex" cssClass="e-info" (click)="reorderByIndex()">
        Reorder Column by Index
      </button>
    </div>
    <div style="margin-top: 10px;">
      <ejs-gantt #gantt height="430px" [dataSource]="data" [allowReordering]="true" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
          <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
          <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
          <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
          <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        </e-columns>
      </ejs-gantt>
    </div>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
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

  public reorderByIndex(): void {
    this.ganttInstance?.treeGrid.grid.reorderColumnByIndex(1, 3);
  }
}
