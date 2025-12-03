import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [columns]="columns" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [allowSelection]="false" [gridLines]="gridLines">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public gridLines?: string;
  public columns?: object[];
  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      endDate: 'EndDate',
      dependency:'Predecessor',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.gridLines = 'Both';
    this.splitterSettings = {
      position: '65%'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', freeze: 'Left', },
      { field: 'TaskName', headerText: 'Task Name', width: 200, freeze: 'Left'},
      { field: 'StartDate', headerText: 'Start Date', },
      { field: 'Duration', headerText: 'Duration',},
      { field: 'EndDate', headerText: 'End Date',},
      { field: 'Progress', headerText: 'Progress', freeze:'Right' },
      { field: 'Status', headerText: 'Status' },
    ];
  }

}

