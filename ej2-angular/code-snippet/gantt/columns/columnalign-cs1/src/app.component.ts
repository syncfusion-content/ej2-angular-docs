import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule, ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { ColumnModel } from '@syncfusion/ej2-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; align-items: center; margin-bottom: 10px;">
      <label style="margin-right: 10px;font-weight:bold">Align the text for columns:</label>
      <ejs-dropdownlist width="120" [dataSource]="alignmentData" [fields]="{ text: 'text', value: 'value' }" [value]="alignmentData[1].value" (change)="changeAlignment($event)">
      </ejs-dropdownlist>
    </div>
    <ejs-gantt #gantt height="370px" [dataSource]="data" [splitterSettings]="splitterSettings" [taskFields]="taskSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" format="yMd" width="150"></e-column>
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
  public alignmentData: { text: string; value: string }[] = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' }
  ];

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

  public changeAlignment(args: ChangeEventArgs): void {
    const alignment = args.value as 'Left' | 'Right' | 'Center' | 'Justify';
    const columns: ColumnModel[] = this.ganttInstance?.treeGrid.grid.columns as ColumnModel[];
    columns.forEach((col: ColumnModel) => {
      col.textAlign = alignment;
    });
    this.ganttInstance?.treeGrid.grid.refreshColumns();
  }
}
