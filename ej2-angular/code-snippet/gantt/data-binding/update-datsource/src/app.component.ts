import { Component, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { virtualData } from './data';
import {updateData } from './updateData'
@Component({
  standalone: true,
  imports: [GanttAllModule,ButtonModule],
  selector: 'app-root',
  template: ` 
    <button ejs-button style="Margin-bottom:20px" (click)='updateDataSourceMethod()'>Update DataSource</button>
    <ejs-gantt #gantt height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [projectStartDate]="projectStartDate" [enableVirtualization]="true"  >
    </ejs-gantt>`
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: false }) public ganttObj?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public columns?: object[];
  public projectStartDate?: object;
  public projectEndDate?: object;

  public ngOnInit(): void {
    this.data = virtualData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'parentID',
      dependency: 'Predecessor',
    };
    this.columns = [
      { field: 'TaskID' },
      { field: 'TaskName' },
      { field: 'StartDate' },
      { field: 'EndDate' },
      { field: 'Duration' },
      { field: 'Progress' },
      { field: 'Predecessor' },
    ];
    this.projectStartDate = new Date('04/01/2024');
  }

  public updateDataSourceMethod(): void {
   let otherinfo = { 
        projectStartDate: new Date('01/01/2024'), 
        projectEndDate: new Date('01/01/2025') 
    } ;
    (this.ganttObj as GanttComponent).updateDataSource(updateData,otherinfo); 
  }
}
