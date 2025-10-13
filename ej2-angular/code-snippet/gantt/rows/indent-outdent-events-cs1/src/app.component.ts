import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, EditService, SelectionService, ToolbarService, EditSettingsModel, ToolbarItem, ActionCompleteArgs, IGanttData } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [EditService, SelectionService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <p id="message" style="color:red">{{ message }}</p>
    <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [treeColumnIndex]="1" [taskFields]="taskSettings" [editSettings]="editSettings" [splitterSettings]="splitterSettings" [toolbar]="toolbar" (actionComplete)="onActionComplete($event)">
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
  public data: IGanttData[] = [];
  public taskSettings: Record<string, string> = {};
  public splitterSettings: { position: string } = { position: '75%' };
  public editSettings: EditSettingsModel = { allowEditing: true };
  public toolbar: ToolbarItem[] = ['Indent', 'Outdent'];
  public message: string = '';

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
  }

  public onActionComplete(args: ActionCompleteArgs): void {
    const taskData = args.data as IGanttData[];

    if (args.requestType === 'outdented') {
      this.message = `Task ID ${(taskData[0] as GanttTask).TaskID} has been outdented`;
    } else if (args.requestType === 'indented') {
      this.message = `Task ID ${(taskData[0] as GanttTask).TaskID} has been indented`;
    }
  }
}

export interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress?: number;
  subtasks?: GanttTask[];
}