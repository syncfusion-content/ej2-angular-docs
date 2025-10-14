import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, DialogModule],
  providers: [ToolbarService, EditService, SelectionService],
  template: `
    <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings"  [treeColumnIndex]="1" [splitterSettings]="splitterSettings" 
    [collapseAllParentTasks]="true" [toolbar]="toolbar" (toolbarClick)="onToolbarClick($event)">
      <e-columns>
        <e-column field='TaskID' headerText='Task ID' width=90></e-column>
        <e-column field='TaskName' headerText='Task Name' width=290></e-column>
        <e-column field='StartDate' headerText='Start Date' width=120></e-column>
        <e-column field='Duration' headerText='Duration' width=90></e-column>
        <e-column field='Progress' headerText='Progress' width=120></e-column>
      </e-columns>
    </ejs-gantt>

    <ejs-dialog #dialog width="400px" height="auto" header="Parent Tasks" [visible]="false" [showCloseIcon]="true" [isModal]="true">
      <ng-template #content>
        <div *ngIf="parentTasks.length > 0">
          <ul>
            <li *ngFor="let task of parentTasks">
              Task ID: {{ task.TaskID }}, Task Name: {{ task.TaskName }}
            </li>
          </ul>
        </div>
        <div *ngIf="parentTasks.length === 0">
          No parent tasks found.
        </div>
      </ng-template>
    </ejs-dialog>`
})
export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  @ViewChild('dialog') public dialogObj?: DialogComponent;

  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public toolbar: any[] = [];
  public parentTasks: any[] = [];

  ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
    this.toolbar = [
      'Add',
      'Edit',
      'Delete',
      { text: 'Show Expand Parent Tasks', id: 'show_parents', tooltipText: 'Show expand parent tasks in dialog' }
    ];
  }

  public onToolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'show_parents' && this.ganttInstance && this.dialogObj) {
        // Get expanded records from flatData
        const expandedRecords = this.ganttInstance.getExpandedRecords(this.ganttInstance.flatData);

        // Filter only parent tasks that are currently expanded.
        this.parentTasks = expandedRecords
        .filter((record: any) => record.hasChildRecords && record.expanded === true)
        .map((record: any) => ({
            TaskID: record.TaskID,
            TaskName: record.TaskName
        }));
        this.dialogObj.show();
    }
 }
}