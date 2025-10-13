import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
        <e-column field="Priority" headerText="Task Priority" width="200">
          <ng-template #template let-data>
            <div>
              <ejs-dropdownlist [value]="data.Priority" [dataSource]="dropData" width="100" [popupHeight]="'150px'" [popupWidth]="'150px'">
              </ejs-dropdownlist>
            </div>
          </ng-template>
        </e-column>
        <e-column field="Duration" headerText="Duration" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public dropData?: string[];
  
  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      priority: 'Priority',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
    this.dropData = ['High', 'Medium', 'Low'];
  }
}
