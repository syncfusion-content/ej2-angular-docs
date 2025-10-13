import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { GanttComponent, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule, CheckBoxModule, ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
import { GanttData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule, CheckBoxModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="controls">
      <ejs-checkbox #checkbox label="Show / Hide Row" (change)="onCheckBoxChange($event)"></ejs-checkbox>
    </div>
    <div class="message">
      <p style="color: red;" id="message">{{ message }}</p>
    </div>
    <ejs-gantt #ganttInstance id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [splitterSettings]="splitterSettings">
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="90"></e-column>
        <e-column field="TaskName" headerText="Task Name" textAlign="Left" width="290"></e-column>
        <e-column field="StartDate" headerText="Start Date" textAlign="Right" width="120"></e-column>
        <e-column field="Duration" headerText="Duration" textAlign="Right" width="90"></e-column>
        <e-column field="Progress" headerText="Progress" textAlign="Right" width="120"></e-column>
      </e-columns>
    </ejs-gantt>`,
  styles: [`
    .controls {
      padding: 2px 0 20px 0;
    }

    .message {
      margin-left: 180px;
    }
  `]
})

export class AppComponent implements OnInit {
  @ViewChild('ganttInstance') public ganttInstance?: GanttComponent;
  public data: Object[] = [];
  public taskSettings: object = {};
  public splitterSettings: object = {};
  public hiddenRows: number[] = [];
  public message: string = '';

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
    }
  }

  public onCheckBoxChange(args: ChangeEventArgs): void {
    const gantt = this.ganttInstance;
    if (!gantt) return;

    const rows = gantt.treeGrid.grid.getRowsObject();
    if (args.checked) {
      rows.forEach((row, index) => {
        const task = row.data as GanttTask;
        if (task.TaskName === 'Perform Soil test') {
          const treeRow = gantt.treeGrid.getRowByIndex(index);
          const ganttRow = gantt.getRowByIndex(index);
          if (treeRow) (treeRow as HTMLElement).style.display = 'none';
          if (ganttRow) ganttRow.style.display = 'none';
          this.hiddenRows.push(index);
        }
      });

      if (this.hiddenRows.length > 0) {
        this.message = `Rows with task name 'Perform Soil test' have been hidden.`;
      }
    } else {
      this.hiddenRows.forEach(index => {
        const treeRow = gantt.treeGrid.getRowByIndex(index);
        const ganttRow = gantt.getRowByIndex(index);
        if (treeRow) (treeRow as HTMLElement).style.display = '';
        if (ganttRow) ganttRow.style.display = '';
      });
      this.hiddenRows = [];
      this.message = 'All hidden rows are now visible.';
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

