import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [GanttModule],
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-gantt
      height="450px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [timelineSettings]="timelineSettings"
      [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate">
    </ejs-gantt>
  `
})
export class AppComponent implements OnInit{
  public data: Object[] = [];
  public taskSettings?: Object;
  public timelineSettings?: Object;
  public projectStartDate?: Date;
  public projectEndDate?: Date;

  public ngOnInit(): void {
    this.data = [
      { TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('2019-04-02'), EndDate: new Date('2019-09-16') },
      { TaskID: 2, ParentID: 1, TaskName: 'Identify Site location', StartDate: new Date('2019-04-02'), Duration: 120, Progress: 50 },
      { TaskID: 3, ParentID: 1, TaskName: 'Perform Soil test', StartDate: new Date('2019-04-02'), Duration: 120, Progress: 50 },
      { TaskID: 4, ParentID: 1, TaskName: 'Soil test approval', StartDate: new Date('2019-04-02'), Duration: 120, Progress: 50 },
      { TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('2019-04-04'), EndDate: new Date('2019-09-18') },
      { TaskID: 6, ParentID: 5, TaskName: 'Develop floor plan for estimation', StartDate: new Date('2019-04-04'), Duration: 120, Progress: 50 },
      { TaskID: 7, ParentID: 5, TaskName: 'List materials', StartDate: new Date('2019-04-04'), Duration: 120, Progress: 50 },
      { TaskID: 8, ParentID: 5, TaskName: 'Estimation approval', StartDate: new Date('2019-04-04'), Duration: 120, Progress: 50 }
    ];

    this.taskSettings = {
      id: 'TaskID',
      parentID: 'ParentID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress'
    };

    this.timelineSettings = {
      topTier: {
        unit: 'Week',
        formatter: (date: Date): string => `Week ${this.getWeekNumber(date)}`
      },
      bottomTier: {
        unit: 'Day',
        count: 1
      }
    };

    this.projectStartDate = new Date('2019-04-01');
    this.projectEndDate = new Date('2019-10-01');
  }

  private getWeekNumber(date: Date): number {
    const currentDate = new Date(date);
    const firstDay = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate.getTime() - firstDay.getTime()) / 86400000);
    return Math.ceil((days + firstDay.getDay() + 1) / 7);
  }
}