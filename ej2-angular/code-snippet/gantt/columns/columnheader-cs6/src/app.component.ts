import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import {GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { WrapMode } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListModule],
  template: `
    <div style="display: flex">
      <label style="padding: 30px 17px 0 0;font-weight:bold">Autowrap for header column :</label>
      <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="100"
        [dataSource]="dropdownData" (change)="valueChange($event)">
      </ejs-dropdownlist>
    </div>
    <div style="padding-top:20px">
      <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (load)="load()">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
          <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="250"></e-column>
          <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
          <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
          <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
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
  public dropdownData: Object[] = [
    { text: 'Header', value: 'Header' },
    { text: 'Content', value: 'Content' },
    { text: 'Both', value: 'Both' }
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

  load(): void {
    if (this.ganttInstance) {
      this.ganttInstance.treeGrid.textWrapSettings.wrapMode = 'Header';
      this.ganttInstance.treeGrid.allowTextWrap = true;
    }
  }

  valueChange(args: ChangeEventArgs): void {
    if (this.ganttInstance) {
      this.ganttInstance.treeGrid.textWrapSettings.wrapMode = args.value as WrapMode;
    }
  }
}
