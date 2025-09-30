import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { FilterService, ToolbarService, GanttModule, ToolbarItem, GanttComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Column, SearchEventArgs } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [FilterService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" [splitterSettings]="splitterSettings" (queryCellInfo)="queryCellInfo($event)" (actionBegin)="actionBegin($event)">
    </ejs-gantt>
  `,
  styles: [`
    .customcss {
      background-color: yellow;
      font-weight: bold;
      color: black;
    }
  `]
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = { columnIndex: 3 };
  public toolbar: ToolbarItem[] = ['Search'];
  public key: string = '';

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
  }

  actionBegin(args: SearchEventArgs): void {
    if (args.requestType === 'searching') {
      this.key = args.searchString?.toLowerCase() ?? '';
    }
  }

  queryCellInfo(args: QueryCellInfoEventArgs): void {
    if (this.key) {
      const field = (args.column as Column).field;
      const cellContent = (args.data as ColumnData)[field];
      if (typeof cellContent === 'string' || typeof cellContent === 'number') {
        const contentStr = cellContent.toString();
        const regex = new RegExp(this.key, 'gi');
        const highlighted = contentStr.replace(regex, match => `<span class='customcss'>${match}</span>`);
        (args.cell as HTMLElement).innerHTML = highlighted;
      }
    }
  }
}

interface ColumnData {
  [key: string]: string | number;
}