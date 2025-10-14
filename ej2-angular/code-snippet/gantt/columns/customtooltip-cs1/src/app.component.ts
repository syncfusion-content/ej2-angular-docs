import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import {TooltipAllModule, TooltipComponent, TooltipEventArgs } from "@syncfusion/ej2-angular-popups";
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, TooltipAllModule],
  template: `
    <div class="control-section">
      <ejs-tooltip #tooltip (beforeRender)="beforeRender($event)" target=".e-headertext">
        <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
          <e-columns>
            <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
            <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
            <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
            <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
            <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
          </e-columns>
        </ejs-gantt>
      </ejs-tooltip>
    </div>`
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('tooltip') public toolTip?: TooltipComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;

  public columnDescriptions: { [key: string]: string } = {
    'Task ID': 'A unique ID for the task.',
    'Task Name': 'The name of the task.',
    'Start Date': 'The starting date of the task.',
    'Duration': 'The total duration of the task.',
    'Progress': 'The current task progress.'
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

  public beforeRender(args: TooltipEventArgs): void {
    const description = this.columnDescriptions[args.target.innerText];
    if (description && this.toolTip) {
      this.toolTip.content = `${args.target.innerText}: ${description}`;
    }
  }
}
