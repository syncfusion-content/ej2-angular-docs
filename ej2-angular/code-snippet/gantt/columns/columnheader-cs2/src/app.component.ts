import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
  <ejs-gantt height="370px" [dataSource]="data" [splitterSettings]="splitterSettings" [taskFields]="taskSettings">
    <e-columns>
        <e-column field="TaskName" width="100">
            <ng-template #headerTemplate>
                <div>
                    <img [src]="'/assets/images/TaskName.png'" style="height:20px; width:20px" alt="Task" />
                </div>
            </ng-template>
        </e-column>
        <e-column field="StartDate" headerText="Start Date" width="100" format="yMd" textAlign="Right"></e-column>
        <e-column field="Duration" headerText="Duration" width="120" textAlign="Right">
            <ng-template #headerTemplate>
                <div>
                    <img [src]="'/assets/images/Duration.png'" style="height:20px; width:20px" alt="Duration" />
                </div>
            </ng-template>
        </e-column>
        <e-column field="Progress" headerText="Progress" width="120" textAlign="Right"></e-column>
    </e-columns>
</ejs-gantt>
`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  ngOnInit(): void {
    this.data = projectNewData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '100%'
    };
  }
}
