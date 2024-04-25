import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" [allowResizing] = 'true'>          
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
            // column hides when browser screen width lessthan 700px;
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290 hideAtMedia='(min-width: 700px)'></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
            // column shows when browser screen width lessthan or equalto 500px;
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 hideAtMedia='(max-width: 500px)'></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=150></e-column>
        </e-columns>
        </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
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
}