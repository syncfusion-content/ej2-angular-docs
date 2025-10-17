import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, EditSettingsModel, EditService, SelectionService} from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [EditService, SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-bottom: 20px;">
      <button ejs-button style="margin-right: 20px;" id="indent" (click)="indent()">Indent</button>
      <button ejs-button id="outdent" (click)="outdent()">Outdent</button>
    </div>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [treeColumnIndex]="1" [dataSource]="data" [splitterSettings]="splitterSettings" [taskFields]="taskSettings" [editSettings]="editSettings">
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
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings!: object;
  public editSettings!: EditSettingsModel;
  public splitterSettings!: object;

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.editSettings = {
      allowEditing: true
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public indent(): void {
    (this.ganttInstance as GanttComponent).selectRow(2); // Select row index 2.
    (this.ganttInstance as GanttComponent).indent();     // Apply indent.
  }

  public outdent(): void {
    (this.ganttInstance as GanttComponent).selectRow(2); // Select row index 2.
    (this.ganttInstance as GanttComponent).outdent();    // Apply outdent.
  }
}
