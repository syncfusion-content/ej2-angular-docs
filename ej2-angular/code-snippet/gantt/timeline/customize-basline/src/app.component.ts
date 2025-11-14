import { GanttModule, IQueryTaskbarInfoEventArgs } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { baselineData } from './data';

@Component({
  imports: [GanttModule],
  providers: [SelectionService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" (queryTaskbarInfo)="queryTaskbarInfo($event)" [taskFields]="taskSettings" [renderBaseline]="true" baselineColor='red'></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{
  public data?: Object[];
  public taskSettings?: object;
  public ngOnInit(): void {
    this.data = baselineData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      baselineStartDate: "BaselineStartDate",
      baselineEndDate: "BaselineEndDate",
      baselineDuration: "BaselineDuration",
      parentID: 'ParentID'
    };
  }

  public queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
    var element = args.rowElement.querySelector('.e-baseline-bar ');
    if (element) {
      (element as HTMLElement).style.background = 'linear-gradient(red, yellow)';
    }
  }
}