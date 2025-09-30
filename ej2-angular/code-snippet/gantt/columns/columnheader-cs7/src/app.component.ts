import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ColumnModel } from '@syncfusion/ej2-angular-grids';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonAllModule],
  template: `
    <div style="margin-bottom: 20px;">
      <button ejs-button cssClass="e-success" (click)="changeHeaderText()">Change Header Text</button>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="StartDate" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="150"></e-column>
      </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public headerTextMap: { [key: string]: string } = {
    TaskID: 'ID',
    TaskName: 'Name',
    StartDate: 'Start Date',
    Duration: 'Task Duration',
    Progress: 'Task Progress'
  };

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

  changeHeaderText(): void {
    this.ganttInstance?.treeGrid.grid.columns.forEach((column: ColumnModel) => {
      column.headerText = this.headerTextMap[column.field as string];
    });
    this.ganttInstance?.treeGrid.refreshHeader();
  }
}
