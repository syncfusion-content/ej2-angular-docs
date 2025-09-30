import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule, ReorderService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ReorderService],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns" [allowReordering]="true">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public columns: object[] = [];

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
      {
        field: 'TaskName',
        headerText: 'Task Name',
        width: '270',
        lockColumn: true,
        customAttributes: { class: 'customcss' }
      },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      position: '75%'
    };
  }
}
