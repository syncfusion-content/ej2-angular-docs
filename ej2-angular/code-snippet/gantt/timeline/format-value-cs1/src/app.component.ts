


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"  [timelineSettings]="timelineSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
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
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 120, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 120 , Progress: 50 },
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
            formatter: (date: Date) => {
                var month = date.getMonth();
                if (month >= 0 && month <= 2) {
                    return 'Q1';
                } else if (month >= 3 && month <= 5) {
                    return 'Q2';
                } else if (month >= 6 && month <= 8) {
                    return 'Q3';
                } else {
                    return 'Q4';
                }

            }
            },
            bottomTier: {
            unit: 'Month',
            format: 'MMM'
        }
        };
        this. projectStartDate = new Date('01/04/2019');
        this.projectEndDate = new Date('12/30/2019');
    }
}



