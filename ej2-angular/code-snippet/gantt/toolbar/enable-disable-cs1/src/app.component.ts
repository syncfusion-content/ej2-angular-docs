import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttModule, GanttComponent, EditService, ToolbarService, SelectionService, FilterService, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { SwitchModule, ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, SwitchModule],
  providers: [EditService, ToolbarService, FilterService, SelectionService],
  template: `
  <div style="margin-bottom: 20px;">
    <label style="margin-right: 10px;font-weight: bold;">Enable or disable toolbar items</label>
    <ejs-switch checked="true" (change)="onSwitchChange($event)"></ejs-switch>
  </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"  [allowFiltering]='true' [editSettings]="editSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)">
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public editSettings: EditSettingsModel = {};
  public toolbar: any[] = [];

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
      allowDeleting: true
    };
    this.toolbar = [{ text: 'Quick Filter', id: 'QuickFilter' }, { text: 'Clear Filter', id: 'ClearFilter' }];
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'QuickFilter') {
      (this.ganttInstance as GanttComponent).filterByColumn('TaskName', 'startswith', 'Approval');
    }
    if (args.item.id === 'ClearFilter') {
      (this.ganttInstance as GanttComponent).clearFiltering();
    }
  }

  public onSwitchChange(args: ChangeEventArgs): void {
    const enable = args.checked as boolean;
    (this.ganttInstance as GanttComponent).toolbarModule.enableItems(['QuickFilter', 'ClearFilter'], enable);
  }
}
