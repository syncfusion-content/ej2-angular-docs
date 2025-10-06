import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FilterService, ToolbarService, GanttModule, ToolbarItem, SearchSettingsModel } from '@syncfusion/ej2-angular-gantt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [FilterService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="370px" [dataSource]="data"  [searchSettings]="searchSettings"  [taskFields]="taskSettings" [toolbar]="toolbar" [splitterSettings] = "splitterSettings">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public toolbar?: ToolbarItem[];
  public searchSettings?: SearchSettingsModel;
  public columns?: object[];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Pröduct Concept', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-04-21') },
      { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('2019-04-02'), Duration: 3, Progress: 30, ParentID: 1 },
      { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('2019-04-02'), Duration: 3, ParentID: 1 },
      { TaskID: 4, TaskName: 'Prepare pröduct skëtch and notes', StartDate: new Date('2019-04-02'), Duration: 2, Predecessor: '2', Progress: 30, ParentID: 1 },
      { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('2019-04-02'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '2019-04-10', name: '#briefing', title: 'Product concept breifing' }] },
      { TaskID: 6, TaskName: 'Market Research', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-04-21') },
      { TaskID: 7, TaskName: 'Demand Analysis', StartDate: new Date('2019-04-04'), EndDate: new Date('2019-04-21'), ParentID: 6 },
      { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '5', Progress: 30, ParentID: 7 },
      { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '5', ParentID: 7 },
      { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentID: 6 },
      { TaskID: 11, TaskName: 'Product strength ànalsysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '9', ParentID: 6 },
      { TaskID: 12, TaskName: 'Resëarch complete', StartDate: new Date('2019-04-04'), Duration: 0, Predecessor: '10', Indicators: [{ date: '2019-04-20', name: '#meeting', title: '1st board of directors meeting' }], ParentID: 6 }
    ];
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
      { field: 'Progress', headerText: 'Progress', width: '150' },
    ];
    this.splitterSettings = {
      columnIndex: 3
    };
    this.toolbar = ['Search'];
    this.searchSettings = {
      fields: ['TaskName'],
      operator: 'contains',
      key: 'Pröduct',
      ignoreCase: true,
      ignoreAccent:true
    }
  }
}
