import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { EditService, ToolbarService, SelectionService, ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule],
  providers: [EditService, ToolbarService, SelectionService],
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [toolbar]="toolbar">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data: object[] = [];
  public taskSettings: object = {};
  public editSettings: EditSettingsModel = {};
  public toolbar: ToolbarItem[] = [];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Kickoff', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Site Selection', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 55 },
      { TaskID: 3, TaskName: 'Soil Analysis', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 65 },
      { TaskID: 4, TaskName: 'Approval of Soil Report', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 35 },
      { TaskID: 5, TaskName: 'Cost Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 6, TaskName: 'Create Floor Plan', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 95 },
      { TaskID: 7, TaskName: 'Material Listing', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 35 },
      { TaskID: 8, TaskName: 'Approval of Estimate', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 85 }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
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
    this.toolbar = [
      'Add', 'Edit', 'Delete', 'Update', 'Cancel',
      'ExpandAll', 'CollapseAll', 'PrevTimeSpan',
      'NextTimeSpan', 'Indent', 'Outdent'
    ];
  }
}