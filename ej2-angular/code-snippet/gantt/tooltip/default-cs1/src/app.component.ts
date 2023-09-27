


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [renderBaseline]="true" [treeColumnIndex]="1" height="450px" baselineColor='red' [tooltipSettings]="tooltipSettings" [eventMarkers]="eventMarkers"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: Object[];
    public taskSettings?: object;
    public columns?: object[];
    public timelineSettings?: object;
    public labelSettings?: object;
    public tooltipSettings?: object;
    public eventMarkers ?: object[];
    public dayWorkingTime?: object[];
    public ngOnInit(): void {
        this.data =  [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location',BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/09/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/08/2019'),BaselineEndDate: new Date('04/12/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation',BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/08/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
            ]
        },
    ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            baselineStartDate: "BaselineStartDate",
            baselineEndDate: "BaselineEndDate",
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.tooltipSettings = {
            showTooltip:true
            }
        this.eventMarkers = [
            {
                day: '04/10/2019',
                label: 'Project approval and kick-off'
            }
        ];
    }
}



