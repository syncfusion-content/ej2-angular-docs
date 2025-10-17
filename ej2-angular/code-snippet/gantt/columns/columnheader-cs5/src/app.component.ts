import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule, TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { GanttData } from './data';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListModule, TextBoxModule, ButtonAllModule],
  template: `
    <div style="display: flex; margin-bottom: 20px;">
      <label style="padding: 30px 20px 0 0; font-weight: bold;">Select column name :</label>
      <ejs-dropdownlist #dropdown style="padding: 26px 0 0 0;" index="0" width="220" [dataSource]="columnsdata">
      </ejs-dropdownlist>
    </div>
    <div style="margin-top: 20px;">
      <label style="padding: 30px 17px 0 0; font-weight: bold;">Enter new header text :</label>
      <ejs-textbox #textbox required placeholder="Enter new header text" width="220">
      </ejs-textbox>
      <button ejs-button id="buttons" (click)="ChangeHeaderText()" style="margin-left: 8px;">Change</button>
    </div>
    <div style="padding: 20px 17px 0 0">
      <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
          <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
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
  @ViewChild('dropdown') public dropDownInstance?: DropDownListComponent;
  @ViewChild('textbox') public textBoxInstance?: TextBoxComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public columnsdata: Object[] = [
    { text: 'TaskID', value: 'TaskID' },
    { text: 'TaskName', value: 'TaskName' },
    { text: 'Duration', value: 'Duration' },
    { text: 'Progress', value: 'Progress' }
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

  public ChangeHeaderText(): void {
    const newText = this.textBoxInstance?.element.value.trim();
    const selectedField = this.dropDownInstance?.value as string;
    if (newText && selectedField && this.ganttInstance) {
      const column = (this.ganttInstance as GanttComponent).treeGrid.grid.getColumnByField(selectedField);
      column.headerText = newText;
      this.ganttInstance.treeGrid.refreshHeader();
    }
  }
}
