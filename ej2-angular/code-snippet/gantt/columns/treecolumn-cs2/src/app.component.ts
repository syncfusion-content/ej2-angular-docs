
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { Column } from '@syncfusion/ej2-grids';

@Component({
  imports: [GanttModule],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt #gantt height="370px" [dataSource]="data" [treeColumnIndex]='1' [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings" (queryCellInfo)=querycellinfo($event)>             
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' width=90 ></e-column>
            <e-column field='TaskName' headerText='Task Name' width=290></e-column>
            <e-column field='StartDate' headerText='Start Date' width=120 ></e-column>
            <e-column field='Duration' headerText='Duration' width=90 ></e-column>
            <e-column field='Progress' headerText='Progress' width=120></e-column>
        </e-columns>
       </ejs-gantt>`,
  styles: [
    `.indents {
      text-indent: 80px !important;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  public ngOnInit(): void {
    this.data = GanttData;
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

  public querycellinfo(args: QueryCellInfoEventArgs): void {
    const data = args.data as { hasChildRecords?: boolean };
    const columnIndex = (args.column as Column).index;
    const treeColumnIndex = this.ganttInstance?.treeColumnIndex;
    if (!data.hasChildRecords && columnIndex === treeColumnIndex) {
      args.cell?.classList.add('indents');
    }
  }
}
