import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, SelectionService, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { TextBoxComponent, TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { projectNewData } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, TextBoxModule, ButtonModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="display: flex; gap: 15px; margin-bottom: 20px;">
      <!-- Row Selection -->
      <div>
        <label for="rowIndex">Row Index:</label>
        <ejs-textbox #rowInput id="rowIndex" width="150px" placeholder="e.g., 1"></ejs-textbox>
        <button ejs-button (click)="selectRow()">Select Row</button>
      </div>

      <!-- Scroll to Date -->
      <div>
        <label for="scrollDate">Scroll to Date:</label>
        <ejs-textbox #dateInput id="scrollDate" width="150px" placeholder="MM/DD/YYYY"></ejs-textbox>
        <button ejs-button (click)="scrollToDate()">Scroll Date</button>
      </div>

      <!-- Scroll to Task -->
      <div>
        <label for="taskId">Scroll to Task ID:</label>
        <ejs-textbox #taskInput id="taskId" width="150px" placeholder="e.g., 3"></ejs-textbox>
        <button ejs-button (click)="scrollToTask()">Scroll Task</button>
      </div>
    </div>

    <div style="height: 500px;">
      <ejs-gantt #gantt height="315px" [dataSource]="data" [taskFields]="taskSettings">
      </ejs-gantt>
    </div>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt') ganttInstance!: GanttComponent;
  @ViewChild('rowInput') rowInput!: TextBoxComponent;
  @ViewChild('dateInput') dateInput!: TextBoxComponent;
  @ViewChild('taskInput') taskInput!: TextBoxComponent;
  public data: object[] = [];
  public taskSettings: object = {};

  ngOnInit(): void {
    this.data = projectNewData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      child: 'subtasks'
    };
  }

  // Select row by index and scroll vertically.
  public selectRow(): void {
    const rowIndex = parseInt(this.rowInput.value, 10);
    if (!isNaN(rowIndex)) {
      this.ganttInstance.selectionModule.selectRow(rowIndex);
      const scrollPosition: number = this.ganttInstance.rowHeight * rowIndex;
      this.ganttInstance.setScrollTop(scrollPosition);
    }
  }

  // Scroll horizontally to a specific date.
  public scrollToDate(): void {
    const dateValue = this.dateInput.value;
    if (dateValue) {
      this.ganttInstance.scrollToDate(dateValue);
    }
  }

  // Scroll horizontally to a specific task by ID.
  public scrollToTask(): void {
    const taskId = this.taskInput.value;
    if (taskId) {
      this.ganttInstance.scrollToTask(taskId);
    }
  }
}