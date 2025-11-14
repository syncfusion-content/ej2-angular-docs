import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <button ejs-button id="show" (click)="show()" style="margin-right: 10px;">Show Column</button>
    <button ejs-button id="hide" (click)="hide()">Hide Column</button>
    <br /><br /><br />
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
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
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public show(): void {
    const allColumns = (this.ganttInstance as GanttComponent).getGanttColumns();
    if (allColumns.length > 0) {
      const firstColumnField = allColumns[2].headerText as string;
      (this.ganttInstance as GanttComponent).showColumn(firstColumnField, 'headerText');
    }
  }

  public hide(): void {
    const visibleColumns = (this.ganttInstance as GanttComponent).treeGrid.getVisibleColumns();
    if (visibleColumns.length > 0) {
      const firstVisibleField = visibleColumns[2].headerText;
      (this.ganttInstance as GanttComponent).hideColumn(firstVisibleField, 'headerText');
    }
  }
}