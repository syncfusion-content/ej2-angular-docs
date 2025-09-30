import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import {GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ColumnModel, TextAlign } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListModule],
  template: `
    <div style="display: flex">
      <label style="padding: 30px 17px 0 0;font-weight:bold">Align the text of header text :</label>
      <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="100" [dataSource]="alignmentData" (change)="changeAlignment($event)">
      </ejs-dropdownlist>
    </div>
    <div style="padding-top:20px">
      <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" headerTextAlign="Right" width="110"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
          <e-column field="StartDate" headerText="Start Date" width="120"></e-column>
          <e-column field="Duration" headerText="Duration" width="90"></e-column>
          <e-column field="Progress" headerText="Progress" width="120"></e-column>
        </e-columns>
      </ejs-gantt>
    </div>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public alignmentData: Object[] = [
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
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public changeAlignment(args: ChangeEventArgs): void {
    this.ganttInstance?.treeGrid.grid.columns.forEach((col: ColumnModel) => {
      col.headerTextAlign = args.value as TextAlign;
    });
    this.ganttInstance?.treeGrid.refreshHeader();
  }
}
