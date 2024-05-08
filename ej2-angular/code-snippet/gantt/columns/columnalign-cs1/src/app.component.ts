
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './data';

@Component({
  imports: [
         GanttModule, DropDownListModule
    ],
standalone: true,
    selector: 'app-root',
  template:
    `<div style="display: flex">
            <label style="padding: 30px 17px 0 0;">Align the text for columns :</label>
            <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" [dataSource]="alignmentData" (change) ="changeAlignment($event)"></ejs-dropdownlist>
        </div>
        <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [splitterSettings]="splitterSettings" [treeColumnIndex]='1' [taskFields]="taskSettings">
        <e-columns>
          <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
          <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=270 ></e-column>
          <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=150 ></e-column>
          <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
          <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
        </e-columns>
       </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  @ViewChild('gantt')
  public gantt?: GanttComponent;
  public alignmentData: Object[] = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
  ];
  public changeAlignment(args: ChangeEventArgs): void {
    (this.gantt as GanttComponent).treeGrid.grid.columns.forEach((col: any) => {
      col.textAlign = args.value;
    });
    (this.gantt as GanttComponent).treeGrid.refresh();
  }
  public ngOnInit(): void {
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
    this.splitterSettings = {
      position: '75%'
    };
  }
}
