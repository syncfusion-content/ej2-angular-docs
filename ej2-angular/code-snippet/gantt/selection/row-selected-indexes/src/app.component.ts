import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent, GanttModule, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, ButtonModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="button-container">
      <button ejs-button cssClass="action-button" (click)="getSelectedRowInfo()">Show Selected Tasks</button>
    </div>
    <div class="table-container">
      <table *ngIf="selectedRecords.length > 0" class="task-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Task Details</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let record of selectedRecords; let i = index" [ngClass]="{'selected-row': true, 'alternate-row': i % 2 !== 0}">
            <td>{{ selectedRowIndexes[i] }}</td>
            <td>
              <div><strong>Task ID:</strong> {{ record.TaskID }}</div>
              <div><strong>Task Name:</strong> {{ record.TaskName }}</div>
              <div><strong>Start Date:</strong> {{ record.StartDate | date:'MM/dd/yyyy' }}</div>
              <div><strong>Duration:</strong> {{ record.Duration ?? 'N/A' }}</div>
              <div><strong>Progress:</strong> {{ record.Progress ?? 0 }}%</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ejs-gantt #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings">
    </ejs-gantt>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {};
  public selectedRowIndexes: number[] = [];
  public selectedRecords: Task[] = [];

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), Progress: 0 },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), Progress: 0 },
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
    ];

    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      parentID: 'ParentID'
    };

    this.selectionSettings = {
      mode: 'Row',
      type: 'Multiple'
    };
  }

  public getSelectedRowInfo(): void {
    // Get selected rows and apply custom style.
    this.selectedRecords = this.ganttInstance.selectionModule.getSelectedRecords() as Task[];
    this.selectedRowIndexes = this.ganttInstance.selectionModule.getSelectedRowIndexes();
    const selectedRows = this.ganttInstance.selectionModule.getSelectedRows() as HTMLElement[];

    // Apply custom-selected-row class to currently selected rows.
    selectedRows.forEach(row => row.classList.add('custom-selected-row'));
  }
}

interface Task {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  ParentID?: number;
}