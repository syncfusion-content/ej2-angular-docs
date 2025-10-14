import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="TaskID" width="90"></e-column>
        <e-column field="TaskName" headerText="TaskName" width="290">
          <ng-template #template let-data>
            <a href="#" (click)="onClick($event, data.TaskName)">
              {{ data.TaskName }}
            </a>
          </ng-template>
        </e-column>
        <e-column field="Duration" headerText="Duration" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`
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

  onClick(event: MouseEvent, taskName: string): void {
    event.preventDefault(); // Prevent default anchor behavior
    const baseUrl = 'https://www.meaningofthename.com/';
    const searchUrl = `${baseUrl}${encodeURIComponent(taskName)}`;
    window.open(searchUrl, '_blank');
  }
}
