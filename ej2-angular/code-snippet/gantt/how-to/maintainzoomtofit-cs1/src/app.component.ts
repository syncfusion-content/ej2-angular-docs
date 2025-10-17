import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, ActionCompleteArgs, ITaskbarEditedEventArgs, ToolbarItem, EditSettingsModel, EditService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
  imports: [GanttModule],
  providers: [EditService, SelectionService, ToolbarService],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"[toolbar]="toolbar" [editSettings]="editSettings" (actionComplete)="actionComplete($event)" (taskbarEdited)="taskbarEdited($event)"></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];
  public editSettings?: EditSettingsModel;

  public ngOnInit(): void {
    this.data = projectNewData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      parentID: 'ParentID',
    };
    this.editSettings = {
      allowEditing: true,
      allowTaskbarEditing: true,
    };
    this.toolbar = ['Edit', 'ZoomToFit'];
  }

  public actionComplete(args: ActionCompleteArgs) {
    if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
      (this.ganttInstance as GanttComponent).dataSource = projectNewData;
      (this.ganttInstance as GanttComponent).fitToProject();
    }
  };
  public taskbarEdited(args: ITaskbarEditedEventArgs) {
    if (args) {
      (this.ganttInstance as GanttComponent).dataSource = projectNewData;
      (this.ganttInstance as GanttComponent).fitToProject();
    }
  };
}

