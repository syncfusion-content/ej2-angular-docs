import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, EditService, SelectionService, ToolbarService, ToolbarItem} from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [EditService, SelectionService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [treeColumnIndex]="1" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [editSettings]="editSettings" [toolbar]="toolbar">
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
  public editSettings!: object;
  public toolbar!: ToolbarItem[];
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
      allowAdding: true,
      allowEditing: true
    };
    this.toolbar = ['Add', 'Indent', 'Outdent'];
    this.splitterSettings = {
      position: '75%'
    };
  }
}
