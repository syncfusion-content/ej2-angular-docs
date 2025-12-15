import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'

@Component({
  imports: [GanttModule],
  standalone: true,
  selector: 'app-root',
  template:
    `<ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings"  [timelineSettings]="timelineSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  public data?: object[];
  public taskSettings?: object;
  public timelineSettings?: object;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('09/16/2019'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 120, Progress: 50 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 120, Progress: 50 },
          { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 120, Progress: 50 },
        ]
      },
      {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('09/18/2019'),
        subtasks: [
          { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 120, Progress: 50 },
          { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 120, Progress: 50 },
          { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 120, Progress: 50 }
        ]
      },
    ];
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };


    this.timelineSettings = {
      topTier: {
        unit: 'Month',
        count: 3,
        formatter: (date: Date, format: string, tier: string, mode: string) => {
          // Calculate quarter based on month
          const month = date.getMonth();
          const quarter = month <= 2 ? 'Q1' : month <= 5 ? 'Q2' : month <= 8 ? 'Q3' : 'Q4';

          // Display formatted date and tier
          return `${quarter} | Tier: ${tier}`;
        }
      },
      bottomTier: {
        unit: 'Month',
        format: 'MMM',
        formatter: (date: Date, format: string, tier: string, mode: string) => {
          // Format month based on provided format
          const formattedDate = format === 'MMM'
            ? new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)
            : new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);

          // Display formatted date, format, and mode
          return `${formattedDate} | Format: ${format} | Mode: ${mode}`;
        }
      }
    };

    this.projectStartDate = new Date('01/04/2019');
    this.projectEndDate = new Date('12/30/2019');
  }
}