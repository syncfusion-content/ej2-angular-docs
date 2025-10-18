import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="100"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
        <e-column field="units" headerText="Units" width="120" textAlign="Right"></e-column>
        <e-column field="unitPrice" headerText="Unit Price" width="120" textAlign="Right"></e-column>
        <e-column field="TotalPrice" headerText="Total Price" [valueAccessor]="totalPrice" width="120" format="c2" type="number" textAlign="Right">
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

  public totalPrice = (
    field: string,
    data: GanttTask,
    column: object
  ): number => {
    return data.units * data.unitPrice;
  };
}

export interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  units: number;
  unitPrice: number;
  subtasks?: GanttTask[];
}

