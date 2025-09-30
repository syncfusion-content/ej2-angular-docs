import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, FilterService, ToolbarService, GanttModule, ToolbarItem, SearchSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, TextBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule, TextBoxModule, DropDownListModule],
  providers: [FilterService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; align-items: center; margin-bottom: 10px;">
      <label style="margin-right: 10px;">Change the search operator:</label>
      <ejs-dropdownlist [dataSource]="ddlData" [fields]="fields" [value]="searchSettings?.operator" (change)="valueChange($event)"
      width="150px"></ejs-dropdownlist>
    </div>
    <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" [splitterSettings]="splitterSettings" [searchSettings]="searchSettings" [columns]="columns">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public toolbar?: ToolbarItem[];
  public searchSettings?: SearchSettingsModel;
  public columns?: object[];
  public ddlData?: object[] = [
    { text: 'Contains', value: 'contains' },
    { text: 'Starts With', value: 'startswith' },
    { text: 'Ends With', value: 'endswith' },
    { text: 'Equal', value: 'equal' },
    { text: 'Not Equal', value: 'notequal' }
  ];
  public fields?: object = { text: 'text', value: 'value' };

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), Duration: 5, Progress: 30 },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/03/2019'), Duration: 3, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/05/2019'), Duration: 2, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/06/2019'), Duration: 6, Progress: 60 },
      { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/07/2019'), Duration: 5, Progress: 70 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 3, Progress: 80 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'), Duration: 4, Progress: 90 }
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress'
    };
    this.columns = [
      { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    this.splitterSettings = {
     Index: 2
    };
    this.toolbar = ['Search'];
    this.searchSettings = { operator: 'contains' };
  }

  valueChange(args: ChangeEventArgs): void {
    if (this.ganttInstance) {
      this.ganttInstance.searchSettings.operator = String(args.value);
    }
  }
}
