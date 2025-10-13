import { Component, ViewEncapsulation } from '@angular/core';
import { GanttModule, ICollapsingEventArgs } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  imports: [GanttModule],
  standalone: true,
  selector: 'app-root',
  template: `
        <div class="control-section">
            <div style="margin-left:180px">
                <p [style.color]="messageColor" id="message">{{ message }}</p>
            </div>
            <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" (expanding)="expanding($event)" (collapsing)="collapsing($event)" (collapsed)="collapsed($event)" (expanded)="expanded($event)" [splitterSettings]="splitterSettings">
                <e-columns>
                    <e-column field="TaskID" headerText="Task ID" textAlign="Right" width=90></e-column>
                    <e-column field="TaskName" headerText="Task Name" textAlign="Left" width=290></e-column>
                    <e-column field="StartDate" headerText="Start Date" textAlign="Right" width=120></e-column>
                    <e-column field="Duration" headerText="Duration" textAlign="Right" width=90></e-column>
                    <e-column field="Progress" headerText="Progress" textAlign="Right" width=120></e-column>
                </e-columns>
            </ejs-gantt>
        </div>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public message: string = '';
  public messageColor: string = 'black';

  public ngOnInit(): void {
    this.data = GanttData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }

  public expanding(args: ICollapsingEventArgs): void {
    const data = args.data as IGanttTask | undefined;
    if (data) {
      this.message = `Expanding Task: ${data.TaskName} (ID: ${data.TaskID})`;
      this.messageColor = 'blue';
      if (data.TaskID === 1) {
        args.cancel = true;
        this.message = `Expanding cancelled for Task: ${data.TaskName} (ID: ${data.TaskID})`;
        this.messageColor = 'red';
      }
    }
  }

  public collapsing(args: ICollapsingEventArgs): void {
    const data = args.data as IGanttTask | undefined;
    if (data) {
      this.message = `Collapsing Task: ${data.TaskName} (ID: ${data.TaskID})`;
      this.messageColor = 'orange';
      if (data.TaskID === 5) {
        args.cancel = true;
        this.message = `Collapsing cancelled for Task: ${data.TaskName} (ID: ${data.TaskID})`;
        this.messageColor = 'red';
      }
    }
  }

  public expanded(args: ICollapsingEventArgs): void {
    const data = args.data as IGanttTask | undefined;
    if (data && (args as any).row) {
      this.message = `Task Expanded: ${data.TaskName} (ID: ${data.TaskID})`;
      this.messageColor = 'green';
      (args as any).row.style.background = '';
      if ((data.Progress ?? 0) > 50) {
        (args as any).row.style.background = '#c0f6c7ff';
      }
    }
  }

  public collapsed(args: ICollapsingEventArgs): void {
    const data = args.data as IGanttTask | undefined;
    if (data && (args as any).row) {
      this.message = `Task Collapsed: ${data.TaskName} (ID: ${data.TaskID})`;
      this.messageColor = 'purple';
      (args as any).row.style.background = '';
      if ((data.Progress ?? 0) < 50) {
        (args as any).row.style.background = '#fb9c9cff';
      }
    }
  }
}


export interface IGanttTask {
  TaskID: number;
  TaskName: string;
  StartDate?: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  subtasks?: IGanttTask[];
}
