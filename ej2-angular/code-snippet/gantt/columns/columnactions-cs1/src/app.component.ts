import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, ResizeService, ReorderService, SortService, FilterService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [ResizeService, ReorderService, SortService, FilterService],
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowSorting]="true" [allowFiltering]="true" [allowReordering]="true" [allowResizing]="true">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="120" [allowSorting]="false"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="270" [allowFiltering]="false"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="150"></e-column>
      </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};

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
    this.splitterSettings = {
      position: '75%'
    };
  }
}
