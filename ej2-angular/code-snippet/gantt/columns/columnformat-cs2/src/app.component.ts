
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  template:
    `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [splitterSettings] = "splitterSettings" [treeColumnIndex]='1'>
          <e-columns>  
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=270 ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 [format]='formatOptions'></e-column>
            <e-column field='EndDate' headerText='End Date' textAlign='Right' width=210 [format]='formatOptionstwo'></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
          </e-columns>
        </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public formatOptions?: object;
  public formatOptionstwo?: object;
  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.formatOptions = { type: 'date', format: 'dd/MM/yyyy' };
    this.formatOptionstwo = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };
    this.splitterSettings = {
      position: '75%'
    };
  }
}



