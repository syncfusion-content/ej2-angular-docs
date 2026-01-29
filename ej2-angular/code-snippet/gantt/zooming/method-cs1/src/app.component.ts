import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, FilterService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { projectNewData } from './data';

@Component({
  imports: [GanttModule, ButtonModule],
  providers: [FilterService, ToolbarService],
  standalone: true,
  selector: 'app-root',
  template:
    `<button ejs-button id="zoomIn" (click)="zoomIn()" style="margin-right: 8px;">ZoomIn</button>
        <button ejs-button id="zoomOut" (click)="zoomOut()" style="margin-right: 8px;">ZoomOut</button>
        <button ejs-button id="fitToProject" (click)="fitToProject()">FitToProject</button>
        <div style="margin-top: 16px;">
          <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>
        </div>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;

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
      child: 'subtasks'
    };
  }

  public zoomIn(): void {
    (this.ganttInstance as GanttComponent).zoomIn();
  };

  public zoomOut(): void {
    (this.ganttInstance as GanttComponent).zoomOut();
  };

  public fitToProject(): void {
    (this.ganttInstance as GanttComponent).fitToProject();
  };
}