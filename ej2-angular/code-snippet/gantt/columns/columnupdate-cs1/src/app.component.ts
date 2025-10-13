import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, Column } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  template: `
    <button ejs-button cssClass="e-info"  style="margin-bottom: 20px;" (click)="updateColumns()">Update Columns</button>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?:  GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public updateColumns(): void {
    const columns = ((this.ganttInstance as GanttComponent).treeGrid.columns as Column[]);
    if (columns) {
      columns[0].textAlign = 'Center';
      columns[0].width = '100';
      columns[2].visible = false;
      columns[1].customAttributes = {
        class: 'customcss'
      };
      (this.ganttInstance as GanttComponent).treeGrid.refreshColumns();
    }
  }
}
