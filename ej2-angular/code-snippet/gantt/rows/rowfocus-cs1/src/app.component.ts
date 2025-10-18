import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { CheckBoxModule, ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, CheckBoxModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="controls">
      <ejs-checkbox #checkbox label="Enable / Disable Auto-focus Tasks" (change)="onCheckBoxChange($event)" [checked]="true">
      </ejs-checkbox>
    </div>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [autoFocusTasks]="true" [taskFields]="taskSettings"
    [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styles: [`
    .controls {
      padding: 10px 0 20px 0;
    }
  `]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data: object[] = [];
  public taskSettings!: object;
  public splitterSettings!: object;

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

  public onCheckBoxChange(args: ChangeEventArgs): void {
    (this.gantt as GanttComponent).autoFocusTasks = (args.checked as boolean);
  }
}
