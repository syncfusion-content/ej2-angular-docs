import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, RowDataBoundEventArgs, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  providers:[SelectionService],
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1"
      [splitterSettings]="splitterSettings" (rowDataBound)="rowDataBound($event)">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styles: [`
    .e-gantt .e-altrow {
      background-color: #f2dadaff;
    }
    .e-gantt .e-selectionbackground, .e-gantt .e-active  {
      background-color: #f9920b !important;
    }
  `],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

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

  public rowDataBound(args: RowDataBoundEventArgs): void {
    const progress = (args.data as GanttTask).Progress;
    if (progress < 30) {
      (args.row as Element).classList.add('below-30');
    } else if (progress >= 30 && progress < 80) {
      (args.row as Element).classList.add('below-80');
    } else {
      (args.row as Element).classList.add('above-80');
    }
  }
}

export interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress: number;
  subtasks?: GanttTask[];
}
