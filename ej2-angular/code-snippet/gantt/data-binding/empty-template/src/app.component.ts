import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GanttAllModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  template: `
    <div class="control-section">
      <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" height="450px" (load)="load($event)">
      </ejs-gantt>
      <ng-template #emptyRecordTemplate>
        <div class="emptyRecordTemplate">
          <span>There is no data available to display at the moment.</span>
        </div>
      </ng-template>
    </div>`,
  standalone: true,
  imports: [GanttAllModule]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttObject?: GanttComponent | any;
  @ViewChild('emptyRecordTemplate', { static: true }) emptyTemplate!: TemplateRef<any>;
  public taskSettings?: object;
  public data?: object[];

  public ngOnInit(): void {
    this.data = [];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks',
      resourceInfo: 'resources',
    };
  }
  public load(args:any): void {
    this.ganttObject.treeGrid.grid.emptyRecordTemplate = this.emptyTemplate;
  }
}
