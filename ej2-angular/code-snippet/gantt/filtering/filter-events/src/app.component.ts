import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, GanttComponent, FilterService } from '@syncfusion/ej2-angular-gantt';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { FilterEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers: [FilterService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="margin-top: 10px;">
      <p style="color: red; text-align: center;">{{ actionBeginMessage }}</p>
      <p style="color: red; text-align: center;">{{ actionCompleteMessage }}</p>
    </div>
    <ejs-gantt #gantt height="370px" [allowFiltering]="true" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [columns]="columns" [filterSettings]="filterSettings" (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
    </ejs-gantt>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public gantt!: GanttComponent;
  public data: object[] = [];
  public taskSettings = {};
  public splitterSettings = {};
  public filterSettings: FilterSettingsModel = {};
  public columns: object[] = [];
  public actionBeginMessage = '';
  public actionCompleteMessage = '';

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), Approved: true },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Approved: false },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Approved: true },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50, Approved: false },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), Approved: true },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Approved: false },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Approved: true },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50, Approved: true }
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
      { field: 'TaskID', headerText: 'Task ID', width: '120' },
      { field: 'TaskName', headerText: 'Task Name', width: '250' },
      { field: 'StartDate', headerText: 'Start Date', width: '150' },
      { field: 'Progress', headerText: 'Progress', width: '150' },
      { field: 'Approved', headerText: 'Approved', width: '100', type: 'boolean' }
    ];
    this.splitterSettings = {
      columnIndex: 2
    };
    this.filterSettings = {
      type: 'Menu'
    };
  }

  public actionBegin(args: FilterEventArgs): void {
    this.actionBeginMessage = '';
    if (args.requestType === "filterBeforeOpen") {
      if ((args as any).columnType === 'number') {
        (args as any).filterModel.customFilterOperators.numberOperator = [
          { value: 'equal', text: 'Equal' },
          { value: 'notequal', text: 'Not Equal' }
        ];
        this.actionBeginMessage = 'Custom number filter operators applied.';
      } else if ((args as any).columnType === 'string') {
        (args as any).filterModel.customFilterOperators.stringOperator = [
          { value: 'contains', text: 'Contains' },
          { value: 'startswith', text: 'Starts With' }
        ];
        this.actionBeginMessage = 'Custom string filter operators applied.';
      }
    }

    // Cancel filtering for StartDate column.
    if (args.requestType === 'filtering' && args.currentFilteringColumn === 'StartDate') {
      args.cancel = true;
      this.actionBeginMessage = args.requestType + ' is not allowed for StartDate column';
    } else {
      this.actionBeginMessage = args.requestType + ' action is triggered in actionBegin event';
    }
  }

  public actionComplete(args: FilterEventArgs): void {
    if (args.requestType === "filterAfterOpen") {
      this.actionCompleteMessage = 'Applied CSS for filter dialog during filterafteropen action';
      const content = (args as any).filterModel.dlgDiv.querySelector('.e-dlg-content') as HTMLElement;
      const footer = (args as any).filterModel.dlgDiv.querySelector('.e-footer-content') as HTMLElement;
      if (content) content.style.background = '#eeeaea';
      if (footer) footer.style.background = '#30b0ce';
    }
    if (args.requestType === 'filtering') {
      this.actionCompleteMessage = args.requestType + ' action is triggered in actionComplete event';
    }
  }
}


