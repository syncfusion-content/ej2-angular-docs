import { Component, OnInit, ViewChild } from '@angular/core';
import { ganttData } from './data';
import { GanttAllModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
  standalone: true,
  imports: [GanttAllModule],
  selector: 'app-root',
  template: `
   <button ejs-button style="margin-right: 20px;" (click)='update()'>Update Custom Column</button>
   <br/>
    <ejs-gantt #gantt height="450px" [dataSource]="data" [taskFields]="taskSettings" height="450px" [splitterSettings]="splitterSettings" [editSettings]="editSettings">

    <e-columns>
    <e-column field="TaskID" headerText="Task ID"></e-column>
    <e-column field="TaskName" headerText="TaskName" width="180">
    </e-column>
    <e-column field="Custom" headerText="Custom" width="220" >
    </e-column>
    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150" >
    </e-column>
    <e-column field="Duration" headerText="Duration" width="100" >
    </e-column>
    <e-column field="Progress" headerText="Progress" width="100" >
    </e-column>
</e-columns>

</ejs-gantt>`,
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true })
  public ganttObj?: GanttComponent | any;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings: object = {};
  public editSettings?: object;

  public ngOnInit(): void {
    this.data = ganttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.editSettings = {
      allowEditing: true,
    };
    this.splitterSettings = {
      columnIndex: 3,
    };
  }
  public update(): void {
    let data: object = {
      TaskID: 3,
      Custom: 'Dynamically custom column value updated',
    };
    (this.ganttObj as GanttComponent).updateRecordByID(data);
  }
}