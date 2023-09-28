


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingResources } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [allowResizing] = 'true' rowHeight='50' [splitterSettings]="splitterSettings" [resourceFields]="resourceFields" [resources]="resources">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign= 'Left' width= 100></e-column>
                <e-column field='TaskName' headerText= 'Task Name' width= 150></e-column>
                <e-column field= 'resources' headerText= 'Resources' width= 250>
                <ng-template #template let-data>
                 <div *ngIf="data.ganttProperties.resourceNames">
                <img src="{{data.TaskID}}.png" style="height:40px;width:40px"/>{{data.ganttProperties.resourceNames}}
                </div>
                </ng-template>
                </e-column>
                <e-column field= 'StartDate' headerText='Start Date' width= 150 ></e-column>
                <e-column field= 'Duration' headerText='Duration' width= 150 ></e-column>
                <e-column field= 'Progress' headerText= 'Progress' width= 150 ></e-column>
            </e-columns></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public resources?: object[];
    public resourceFields?: object;
    public ngOnInit(): void {
        this.data = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0,
                Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
            },
            {
                TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing'
            },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30, resources: [9, 11], },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '4', Progress: 30, resources: [4],
                info: 'Develop floor plans and obtain a materials list for estimations'
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '6', resources: [4, 8], info: ''
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                Duration: 0, Predecessor: '7', info: ''
            }
        ]
    },
            ];
        this.taskSettings = {
             id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.splitterSettings = {
            columnIndex:4
            };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
        this.resources = editingResources;
    }
}



