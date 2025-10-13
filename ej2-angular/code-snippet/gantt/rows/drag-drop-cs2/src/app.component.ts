import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [RowDDService, EditService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-bottom: 15px;">
      <button ejs-button id="rowdrag" (click)="drag()">Drag and Drop</button>
    </div>
    <ejs-gantt #gantt height="450px" [dataSource]="data" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowRowDragAndDrop]="true" [taskFields]="taskSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>
  `
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
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public drag(): void {
    (this.ganttInstance as GanttComponent).reorderRows([1], 2, 'below');
  }
}
