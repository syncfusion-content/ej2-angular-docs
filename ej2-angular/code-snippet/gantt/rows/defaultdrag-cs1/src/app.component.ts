import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [RowDDService, EditService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="450px" [treeColumnIndex]="1" [dataSource]="data" [splitterSettings]="splitterSettings" [allowRowDragAndDrop]="true" [taskFields]="taskSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings!: object;
  public splitterSettings!:object;

  ngOnInit(): void {
    this.data = GanttData;

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };

    this.splitterSettings = {
      position: '75%'
    };
  }
}
