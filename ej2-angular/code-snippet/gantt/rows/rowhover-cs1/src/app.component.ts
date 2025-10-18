import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';
import { Tooltip } from '@syncfusion/ej2-popups';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  template: `
    <div style="padding: 0 0 20px 0;"></div>
    <p id="message">{{ message }}</p>
    <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings" (dataBound)="dataBound()">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
      </e-columns>
    </ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') public gantt?: GanttComponent;
  public data?: object[];
  public message: string = '';
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
      position: '50%'
    };
  }

  public dataBound(): void {
    const ganttElement = (this.gantt as GanttComponent).getRootElement() as HTMLElement;
    ganttElement.addEventListener('mouseover', (mouseargs: MouseEvent) => {
      let target: any;
      if (
        mouseargs.target &&
        ((mouseargs.target as HTMLElement).classList.contains('e-rowcell') ||
          (mouseargs.target as HTMLElement).classList.contains('e-chart-row-cell'))
      ) {
        target = mouseargs.target as HTMLElement;
      }
      if (target) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Row details';
        const tooltip = new Tooltip({
          content: buttonElement,
          width: '100px',
          height: '40px',
          opensOn: 'Hover'
        }, target);

        buttonElement.addEventListener('click', () => {
          const rowElement = target.closest('.e-row') || target.closest('.e-chart-row');
          if (rowElement) {
            const rowIndex = rowElement.getAttribute('aria-rowindex');
            if (rowIndex !== null && this.gantt) {
              const rowInfo = this.gantt.treeGrid.getRowInfo(target);
              const rowData = rowInfo?.rowData as any;
              if (rowData) {
                this.message = `Button clicked for Task ID: ${rowData['TaskID']}`;
              }
            }
          }
        });
      }
    });
  }
}
