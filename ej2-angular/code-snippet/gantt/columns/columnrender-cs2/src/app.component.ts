import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, ColumnModel, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [columns]="columns" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText" [width]="240">
        </e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public columns?: ColumnModel[];
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
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID' },
      { field: 'TaskName', headerText: 'Task Name' },
      { field: 'StartDate', headerText: 'Start Date' },
      { field: 'Duration', headerText: 'Duration' },
      { field: 'Progress', headerText: 'Progress' }
    ];
    this.splitterSettings = {
      position: '75%'
    };
  }
}
