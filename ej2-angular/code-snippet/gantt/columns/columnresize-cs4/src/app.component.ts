import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, ResizeService, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DropDownListAllModule, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GanttModule,
    DropDownListAllModule,
    TextBoxModule,
    ButtonModule
  ],
  providers: [ResizeService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <label style="padding-right: 10px;font-weight:bold">Change the field:</label>
      <ejs-dropdownlist style="margin-top: 5px;" id="value" #dropdown index="0" width="120" [fields]="field" [dataSource]="ddlData">
      </ejs-dropdownlist>
    </div>
    <div style="margin-bottom: 20px;">
      <label style="padding-right: 10px;font-weight:bold">Enter the width:</label>
      <ejs-textbox #textbox required placeholder="Enter new width" width="120">
      </ejs-textbox>
      <button ejs-button id="button" (click)="onExternalResize()"> Resize
      </button>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
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
  @ViewChild('dropdown') public dropDown?: DropDownListComponent;
  @ViewChild('textbox') public textbox?: any;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public field: object = { text: 'text', value: 'value' };
  public ddlData: object[] = [
    { text: 'TaskID', value: 'TaskID' },
    { text: 'TaskName', value: 'TaskName' },
    { text: 'StartDate', value: 'StartDate' },
    { text: 'Duration', value: 'Duration' }
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

  onExternalResize(): void {
    const field = this.dropDown?.value as string;
    const newWidth = this.textbox?.element.value;

    if (field && newWidth && this.ganttInstance) {
      const column = this.ganttInstance.treeGrid.getColumnByField(field);
      if (column) {
        column.width = newWidth;
        this.ganttInstance.treeGrid.refreshColumns();
      }
    }
  }
}
