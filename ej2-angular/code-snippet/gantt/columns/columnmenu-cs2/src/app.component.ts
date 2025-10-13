import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent, SortService, FilterService, ColumnMenuService } from '@syncfusion/ej2-angular-gantt';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SortService, FilterService, ColumnMenuService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [allowFiltering]="true"
    [allowResizing]="true" [showColumnMenu]="true" [allowSorting]="true" [splitterSettings]="splitterSettings" [sortSettings]="sortSettings"
    [columnMenuItems]="columnMenuItems" (columnMenuClick)="columnMenuClick($event)">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="120"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="150"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public columnMenuItems?: object[];
  public sortSettings?: object;

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
    this.columnMenuItems = [{ text: 'Clear Sorting', id: 'ganttclearsorting' }];
    this.sortSettings = {
      columns: [{ field: 'TaskID', direction: 'Descending' }]
    };
  }

  public columnMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'ganttclearsorting') {
      this.ganttInstance?.clearSorting();
    }
  }
}
