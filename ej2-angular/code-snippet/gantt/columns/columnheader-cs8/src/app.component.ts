import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttModule, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule],
  template: `
    <ejs-gantt #gantt [height]="240" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (created)="setHeaderHeight()">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="290"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Center" width="90"
          [customAttributes]="customAttributes"></e-column>
        <e-column field="Progress" headerText="Progress" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public splitterSettings?: object;
  public customAttributes?: object;

  ngOnInit(): void {
    this.data = GanttData;
    this.customAttributes = { class: 'orientationcss' };
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

  public setHeaderHeight(): void {
    const textElement = document.querySelector('.orientationcss > div');
    if (textElement) {
      const textWidth = textElement.scrollWidth;
      const headerCells = document.querySelectorAll('.e-headercell');
      headerCells.forEach((cell) => {
        (cell as HTMLElement).style.height = `${textWidth + 500}px`;
      });
    }
  }
}
