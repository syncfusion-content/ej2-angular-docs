import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    standalone: true,
    imports: [GanttModule],
    selector: 'app-root',
    template: `
        <ejs-gantt
            height="430px"
            [dataSource]="data"
            [taskFields]="taskSettings"
            [timelineSettings]="timelineSettings"
            [projectStartDate]="projectStartDate"
            [projectEndDate]="projectEndDate">
        </ejs-gantt>
    `,
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
                EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },

            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 }
        ];

        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID'
        };

        this.timelineSettings = {
            viewStartDate: new Date('04/03/2019'),
            viewEndDate: new Date('04/07/2019'),
        };

        this.projectStartDate = new Date('03/31/2019');
        this.projectEndDate = new Date('04/13/2019');
    }
}