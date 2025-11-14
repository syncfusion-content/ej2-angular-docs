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
        <e-column field="TaskName" width="290">
          <ng-template #headerTemplate let-data>
            <div>
              <img src="assets/images/taskname.png" width="20" height="20" class="e-template">
              <b className='e-header'>Task Name</b>
            </div>
          </ng-template>
        </e-column>
        <e-column field="StartDate" width="390" textAlign="Right">
          <ng-template #headerTemplate>
            <div>
              <img src="assets/images/startdate.png" width="20" height="20" class="e-template">
              <b className='e-header'>Start Date</b>
            </div>
          </ng-template>
        </e-column>
        <e-column field="Duration" width="120" textAlign="Right">
          <ng-template #headerTemplate>
            <div>
              <img src="assets/images/duration.png" width="20" height="20" class="e-template">
              <b className='e-header'>Duration</b>
            </div>
          </ng-template>
        </e-column>
        <e-column field="Progress" headerText="Progress" width="120" textAlign="Right">
        <ng-template #headerTemplate>
            <div>
              <img src="assets/images/progress.png" width="20" height="20" class="e-template">
              <b className='e-header'>Progress</b>
            </div>
          </ng-template>
        </e-column>
      </e-columns>
    </ejs-gantt>`,
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
      position: '75%'
    };
  }
}