import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttModule, EditService, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GanttModule, ButtonModule],
  providers: [EditService],
  template: `
    <div style="margin-bottom: 8px;">
      <button ejs-button (click)="convertTaskToMilestone()">Convert Task 6 to Milestone</button>
    </div>
    <ejs-gantt #gantt height="460px" [dataSource]="data" [taskFields]="taskFields" [editSettings]="editSettings" [columns]="cols" allowUnscheduledTasks="true">
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('gantt', { static: true }) gantt!: GanttComponent;
  public data?: object[];
  public taskFields?: object;
  public editSettings: EditSettingsModel | undefined;
  public cols: object[] = [];

  ngOnInit(): void {
    this.data = [
      {
        TaskID: 1, TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true,
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', Duration: 3, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', EndDate: new Date('04/08/2019'), Progress: 50 },
        ]
      },
      {
        TaskID: 5, TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'), isParent: true,
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('04/04/2019'), EndDate: new Date('04/08/2019'), Progress: 50, resources: [4], isParent: false },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', Duration: 0, Progress: 50 }
        ]
      }
    ];
    this.taskFields = {
      id: 'TaskID', name: 'TaskName',
      startDate: 'StartDate', endDate: 'EndDate',
      duration: 'Duration', progress: 'Progress',
      child: 'subtasks'
    };
    this.editSettings = {
      allowEditing: true,
    };
    this.cols = [
      { field: 'TaskID', headerText: 'ID', width: 80 },
      { field: 'TaskName', headerText: 'Name', width: 160 },
      { field: 'StartDate', headerText: 'Start', width: 110 },
      { field: 'EndDate', headerText: 'End', width: 110 },
      { field: 'Duration', headerText: 'Dur', width: 80 },
      { field: 'Progress', headerText: 'Prog', width: 80 }
    ];
  }

  public convertTaskToMilestone(): void {
    this.gantt.convertToMilestone('6');
  }
}