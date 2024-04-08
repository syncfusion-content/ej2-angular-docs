import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  template:
    `<button ejs-button id='add' cssClass="e-info" (click)='addColumns()'> Add Column</button>
        <button ejs-button id='delete' cssClass="e-info" (click)='deleteColumns()'> Delete Column</button>
       <ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings">       
       <e-columns>
          <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
          <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=150 ></e-column>
          <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
          <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
          <e-column field='Progress' headerText='Progress' textAlign='Right' width=90></e-column>
        </e-columns>

       </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
  public data?: object[];
  @ViewChild('gantt')
  public gantt?: GanttComponent
  public taskSettings?: object;
  public splitterSettings?: object;
  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks',
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
  addColumns(): void {
    var newColumns = [
      { field: 'TaskID', headerText: 'TaskID', width: 120 },
      { field: 'StartDate', headerText: 'StartDate', width: 120, format: 'yMd' },
    ];
    newColumns.forEach((col) => {
      (this.gantt as GanttComponent).treeGrid.grid.columns.push(col as any);
    });
    (this.gantt as GanttComponent).treeGrid.grid.refreshColumns();
  }
  deleteColumns(): void {
    (this.gantt as GanttComponent).treeGrid.grid.columns.pop();
    (this.gantt as GanttComponent).treeGrid.grid.refreshColumns();
  }
}