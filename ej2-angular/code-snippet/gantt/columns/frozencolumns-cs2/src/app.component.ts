import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [columns]="columns" [labelSettings] = "labelSettings" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowSelection]="false" [gridLines]="gridLines">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public gridLines?: string;
  public columns?: object[];
  public labelSettings?: object;
  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      endDate: 'EndDate',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.gridLines = 'Both';
    this.splitterSettings = {
      position: '65%'
    };
    this.labelSettings = {
      taskLabel: 'Progress',
      rightLabel: 'TaskName'
    }
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', isFrozen: true, },
      { field: 'TaskName', headerText: 'Task Name', width: 220, isFrozen: true,},
      { field: 'StartDate', headerText: 'Start Date', },
      { field: 'Duration', headerText: 'Duration',},
      { field: 'Progress', headerText: 'Progress', },
      { field: 'Status', headerText: 'Status',isFrozen: true, },
    ];
  }

}

