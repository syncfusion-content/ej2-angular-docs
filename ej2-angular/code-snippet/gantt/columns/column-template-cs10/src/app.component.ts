import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, RadioButtonModule],
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
        <e-column field="Duration" headerText="Duration" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" width="120"></e-column>
        <e-column field="OrderStatus" headerText="Order Status" width="180">
          <ng-template #template let-data>
            <div style="display: flex; flex-direction: column; align-items: start; gap: 10px;">
              <ejs-radiobutton label="Pending" name="radio-{{data.TaskID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Pending'"></ejs-radiobutton>
              <ejs-radiobutton label="Confirmed" name="radio-{{data.TaskID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Confirmed'"></ejs-radiobutton>
              <ejs-radiobutton label="Shipped" name="radio-{{data.TaskID}}" cssClass="e-success" [checked]="data.OrderStatus === 'Shipped'"></ejs-radiobutton>
            </div>
          </ng-template>
        </e-column>
      </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
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
}
