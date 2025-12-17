import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData, resourceCollection } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttAllModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [columns]="columns" [labelSettings]="labelSettings" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [gridLines]="gridLines" [resources]="resources" [resourceFields]="resourceFields" >
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public gridLines?: string;
  public columns?: object[];
  public resources: any;
  public resourceFields : any;
  public labelSettings: any;
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
      resourceInfo: 'Resources',
    };
    this.gridLines = 'Both';
    this.splitterSettings = {
      position: '65%'
    };
    this.resources = resourceCollection;
    this.resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
    };
    this.labelSettings={
        taskLabel: 'Progress'
    }
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', freeze: 'Left', },
      { field: 'TaskName', headerText: 'Task Name', width: 200,},
      { field: 'StartDate', headerText: 'Start Date', width: 130, },
      { field: 'Duration', headerText: 'Duration', width: 110,},
      { field: 'EndDate', headerText: 'End Date',width: 130, },
      { field: 'Progress', headerText: 'Progress', width: 110, freeze: 'Fixed' },
      { field: 'Predecessor', headerText: 'Dependency', width: 120 },
      { field: 'Resources', headerText: 'Assignee', freeze: 'Right' },
    ];
  }

}

