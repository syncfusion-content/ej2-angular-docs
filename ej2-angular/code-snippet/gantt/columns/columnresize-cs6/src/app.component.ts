import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, ResizeService, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ResizeMode } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule,DropDownListAllModule],
  providers: [ResizeService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; align-items: center; margin-bottom: 10px;">
      <label style="padding-right: 10px;font-weight:bold">Change the resize mode:</label>
      <ejs-dropdownlist style="margin-top: 5px;" index="0" width="150" [dataSource]="ddlData" (change)="valueChange($event)">
      </ejs-dropdownlist>
    </div>

    <ejs-gantt #gantt height="430px" [allowResizing]="true" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
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
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public ddlData: object[] = [
    { text: 'Normal', value: 'Normal' },
    { text: 'Auto', value: 'Auto' }
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

  valueChange(args: ChangeEventArgs): void {
    if (this.ganttInstance) {
      this.ganttInstance.treeGrid.grid.resizeSettings.mode = args.value as ResizeMode;
    }
  }
}
