import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, FilterService, GanttModule, ToolbarItem, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { ChangeEventArgs, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, DropDownListAllModule],
  providers: [FilterService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="padding-top: 7px;padding-bottom:20px; display: flex; align-items: center; gap: 10px;">
      <label style={font-weight:bold}}>Hierarchy Mode:</label>
      <ejs-dropdownlist (change)="onChange($event)" [dataSource]="dropData" [fields]="fields" value="Parent">
      </ejs-dropdownlist>
    </div>
    <ejs-gantt #gantt height="370px" [allowFiltering]="true" [dataSource]="data" [toolbar]="toolbar" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public columns: object[] = [];
  public splitterSettings: object = {};
  public dropData: object[] = [];
  public fields: object = {};
  public toolbar?: ToolbarItem[];

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
    this.toolbar = ['Search'];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
      columnIndex: 3
    };
    this.dropData = [
      { id: 'Parent', mode: 'Parent' },
      { id: 'Child', mode: 'Child' },
      { id: 'Both', mode: 'Both' },
      { id: 'None', mode: 'None' }
    ];
    this.fields = { text: 'mode', value: 'id' };
  }

  public onChange(e: ChangeEventArgs): void {
    let mode: any = <string>e.value;
    (this.ganttInstance as GanttComponent).filterSettings.hierarchyMode = mode;
    (this.ganttInstance as GanttComponent).searchSettings.hierarchyMode = mode;
    (this.ganttInstance as GanttComponent).clearFiltering();
  }
}
