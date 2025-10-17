import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="button-group">
      <button ejs-button id="small" cssClass="e-small" (click)="clickHandler($event)">
        Change height to 20px
      </button>
      <button ejs-button id="medium" cssClass="e-small" (click)="clickHandler($event)">
        Default height 42px
      </button>
      <button ejs-button id="big" cssClass="e-small" (click)="clickHandler($event)">
        Change height to 60px
      </button>
  </div>
  <div class="gantt-container">
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" [rowHeight]="rowHeight">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>
  </div>`,
  styles: [`
    .button-group {
      margin-bottom: 20px;
    }

    .button-group button {
      margin-right: 10px;
    }

    .gantt-container {
      margin-top: 10px;
    }
`]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public ganttInstance?: GanttComponent;
  public data: object[] = [];
  public taskSettings!: object;
  public splitterSettings!: object;
  public rowHeight: number = 42;
  public heightRow: Record<string, number> = {
    small: 20,
    medium: 42,
    big: 60
  };

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
  }

  public clickHandler(event: MouseEvent): void {
    (this.ganttInstance as GanttComponent).rowHeight = this.heightRow[(event.target as HTMLElement).id];
  }
}
