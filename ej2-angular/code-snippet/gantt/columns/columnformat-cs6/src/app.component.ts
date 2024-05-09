import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';
import { GanttData } from './data';

@Component({
  imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
  template:
    `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" (rowDataBound)='rowDataBound($event)' >       
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=270 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
            <e-column field='verified' headerText= 'Verified' displayAsCheckBox= true type= 'boolean' textAlign='Center'></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
        </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
  public data?: object[];
  @ViewChild('gantt')
  public gantt?: GanttComponent;
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
      child: 'subtasks',
      verified: 'verified'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
  rowDataBound(args: RowDataBoundEventArgs) {
    if (args.row?.ariaRowIndex === '3') {
      args.row.children[3].innerHTML = '';
    }
  }
}
