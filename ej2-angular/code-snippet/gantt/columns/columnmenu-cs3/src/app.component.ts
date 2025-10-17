import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { ColumnMenuOpenEventArgs, ColumnMenuClickEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttModule, GanttComponent, SortService, FilterService, ColumnMenuService} from '@syncfusion/ej2-angular-gantt';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [SortService, FilterService, ColumnMenuService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [allowFiltering]="true"
    [allowResizing]="true" [showColumnMenu]="true" [allowSorting]="true" [splitterSettings]="splitterSettings" (columnMenuOpen)="columnMenuOpen($event)" (columnMenuClick)="columnMenuClick($event)">
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
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public message?: string;

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

  public columnMenuOpen(args: ColumnMenuOpenEventArgs): void {
    args.items.forEach(item => {
      (item as CustomMenuItemModel).hide = item.text === 'Filter' && args.column?.field === 'TaskName';
    });
  }

  public columnMenuClick(args: ColumnMenuClickEventArgs): void {
    this.message = `columnMenuClick event is triggered`;
  }
}

interface CustomMenuItemModel extends MenuItemModel {
  hide?: boolean;
}

