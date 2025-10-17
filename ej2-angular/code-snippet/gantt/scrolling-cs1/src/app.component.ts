import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, EditSettingsModel, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="350px" width="600px" [dataSource]="data" [taskFields]="taskSettings">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public editSettings?: EditSettingsModel;

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
  }
}
