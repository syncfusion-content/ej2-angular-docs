import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, FilterService, ToolbarService, GanttModule, ToolbarItem, SearchSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, TextBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-angular-inputs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule, TextBoxModule],
  providers: [FilterService, ToolbarService],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center;">
    <ejs-textbox #searchInput width="200" (change)=change($event) showClearButton='true' placeholder="Search text"></ejs-textbox>
    <button ejs-button (click)="search()">Search</button>
  </div>
  <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" [splitterSettings] = "splitterSettings">
  </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  @ViewChild('searchInput') public searchInput?: TextBoxComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public toolbar?: ToolbarItem[];
  public searchSettings?: SearchSettingsModel;
  public columns?: object[];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Product Concept', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-04-21') },
      { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('2019-04-02'), Duration: 3, Progress: 30, ParentID: 1 },
      { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('2019-04-02'), Duration: 3, ParentID: 1 },
      { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('2019-04-02'), Duration: 2, Predecessor: '2', Progress: 30, ParentID: 1 },
      { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('2019-04-02'), Duration: 0, Predecessor: '3,4', Indicators: [{ date: '2019-04-10', name: '#briefing', title: 'Product concept breifing' }] },
      { TaskID: 6, TaskName: 'Market Research', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-04-21') },
      { TaskID: 7, TaskName: 'Demand Analysis', StartDate: new Date('2019-04-04'), EndDate: new Date('2019-04-21'), ParentID: 6 },
      { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '5', Progress: 30, ParentID: 7 },
      { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '5', ParentID: 7 },
      { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '7, 8', Progress: 30, ParentID: 6 },
      { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('2019-04-04'), Duration: 4, Predecessor: '9', ParentID: 6 },
      { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('2019-04-04'), Duration: 0, Predecessor: '10', Indicators: [{ date: '2019-04-20', name: '#meeting', title: '1st board of directors meeting' }], ParentID: 6 }
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
      { field: 'TaskName', headerText: 'Task Name', width: '400' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Duration', headerText: 'Duration', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' },
    ];
    this.splitterSettings = {
      columnIndex: 3
    };
    this.toolbar = ['Search'];
  }
  
  search(): void {
    const searchValue: string = (this.searchInput as TextBoxComponent).value;
    (this.ganttInstance as GanttComponent).search(searchValue);
  };

  change(args: ChangeEventArgs): void {
    if (args.value === undefined || args.value === null || args.value.toString() === '') {
      (this.ganttInstance as GanttComponent).search('');
    }
  }
}
