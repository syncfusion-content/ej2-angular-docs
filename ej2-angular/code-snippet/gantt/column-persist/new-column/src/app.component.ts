import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, SortService, ToolbarService, EditService, FilterService, EditSettingsModel, ToolbarItem, Column } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [ToolbarService, EditService, SortService, FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <button ejs-button id='add' (click)='addColumn()'>Add Columns</button>
    <ejs-gantt  #gantt id='TaskDetails' height="430px" [allowSorting] ="true" [allowFiltering]="true"  [editSettings]="editSettings" [toolbar]="toolbar" [dataSource]="data" [taskFields]="taskSettings" [enablePersistence]='true' [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" width="90" textAlign="Right"></e-column>
        <e-column field="TaskName" width="290"></e-column>
        <e-column field="StartDate" width="390" format="yMd" textAlign="Right"></e-column>
        <e-column field="Duration" width="120" textAlign="Right"></e-column>
      </e-columns>
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = { columnIndex: 2 };
  public editSettings?: EditSettingsModel;
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
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };
    this.editSettings = {
      allowAdding: true,
      allowEditing: true,
      allowDeleting: true,
      allowTaskbarEditing: true,
      showDeleteConfirmDialog: true
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search','ExpandAll', 'CollapseAll', 'PrevTimeSpan', 'NextTimeSpan', 'Indent', 'Outdent'];
  }

  public addColumn() {
    let obj = { field: "Progress", headerText: 'Progress', width: 120 };
    ((this.ganttInstance as GanttComponent).columns as Column[]).push(obj as Column); //you can add the columns by using the Grid columns method
    (this.ganttInstance as GanttComponent).treeGrid.refreshColumns();
  }
}
