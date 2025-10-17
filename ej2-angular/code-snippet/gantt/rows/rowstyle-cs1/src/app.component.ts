import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (rowDataBound)="onRowDataBound($event)">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
      </e-columns>
    </ejs-gantt>
  `,
  styles: [`
    .below-30 { background-color: #ffe0e0; }
    .below-80 { background-color: #fff4cc; }
    .above-80 { background-color: #e0ffe0; }
  `]
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object= {};

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

  onRowDataBound(args: RowDataBoundEventArgs): void {
    const progress = (args.data as GanttTask).Progress as number;
    if (progress < 30) {
      (args.row as HTMLElement).classList.add('below-30');
    } else if (progress >= 30 && progress < 80) {
      (args.row as HTMLElement).classList.add('below-80');
    } else {
      (args.row as HTMLElement).classList.add('above-80');
    }
  }
}

export interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  Duration: number;
  Progress?: number;
  subtasks?: GanttTask[];
}