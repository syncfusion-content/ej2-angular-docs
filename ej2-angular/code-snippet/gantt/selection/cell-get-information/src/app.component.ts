import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanttComponent, GanttModule, SelectionService, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GanttModule, ButtonModule, DialogModule],
  providers: [SelectionService],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div style="padding: 10px 0px 20px 0px">
      <button ejs-button class="btn" (click)="showSelectedDetails()">Show Selected Cell Details</button>
    </div>
    <ejs-gantt #gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [selectionSettings]="selectionSettings"> 
    </ejs-gantt>
    <ejs-dialog [header]="'Selected Cell Details'" [visible]="dialogVisible" (close)="dialogClose()" showCloseIcon="true" width="600px" height="300px" [position]="{ X: 300, Y: 100 }">
      <ng-template #content>
        <div style="max-height: 240px; overflow-y: auto; padding-right: 10px;">
          <table border="1" cellpadding="5" cellspacing="0" style="width: 100%;">
            <thead>
              <tr>
                <th>Row Index</th>
                <th>Cell Index</th>
                <th>Row Details</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let detail of selectedDetails">
                <td>{{ detail.rowIndex }}</td>
                <td>{{ detail.cellIndex }}</td>
                <td>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td><strong>Task ID:</strong></td>
                      <td>{{ detail.record?.TaskID }}</td>
                    </tr>
                    <tr>
                      <td><strong>Task Name:</strong></td>
                      <td>{{ detail.record?.TaskName }}</td>
                    </tr>
                    <tr>
                      <td><strong>Start Date:</strong></td>
                      <td>{{ detail.record?.StartDate | date:'mediumDate' }}</td>
                    </tr>
                    <tr>
                      <td><strong>Duration:</strong></td>
                      <td>{{ detail.record?.Duration }}</td>
                    </tr>
                    <tr>
                      <td><strong>Progress:</strong></td>
                      <td>{{ detail.record?.Progress }}%</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ng-template>
    </ejs-dialog>`
})

export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
  public data: object[] = [];
  public taskSettings: object = {};
  public selectionSettings: SelectionSettingsModel = {
    mode: 'Cell',
    type: 'Multiple'
  };
  public selectedDetails: {
    rowIndex: number;
    cellIndex: string;
    record: GanttTask;
  }[] = [];

  public dialogVisible: boolean = false;

  ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 80 },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019') },
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
  }

  public showSelectedDetails(): void {
    const records = this.ganttInstance.selectionModule.getCellSelectedRecords() as GanttTask[];
    const indexes = this.ganttInstance.selectionModule.getSelectedRowCellIndexes();

    this.selectedDetails = indexes.map((index, i) => ({
      rowIndex: index.rowIndex,
      cellIndex: index.cellIndexes.join(', '),
      record: records[i] || {}
    }));

    this.dialogVisible = true;
  }

  public dialogClose(): void {
    this.dialogVisible = false;
  }
}

interface GanttTask {
  TaskID: number;
  TaskName: string;
  StartDate: Date;
  EndDate?: Date;
  Duration?: number;
  Progress?: number;
  ParentID?: number;
}
