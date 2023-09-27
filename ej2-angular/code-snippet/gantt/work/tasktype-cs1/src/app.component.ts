


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
        ` <ejs-gantt id="resources" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [treeColumnIndex]="1" [editSettings]="editSettings"
        height="450px" [allowSelection]="true" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [highlightWeekends]="true"
        [toolbar]="toolbar" [resourceFields] = "resourceFields" resourceNameMapping='resourceName' resourceIDMapping='resourceId' resourceUnitMapping='Unit' [resources]="resources" workUnit="Hour" taskType= "FixedWork">
    </ejs-gantt> `,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public resources?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    editSettings: { allowAdding: boolean; allowEditing: boolean; allowDeleting: boolean; allowTaskbarEditing: boolean; showDeleteConfirmDialog: boolean; } | undefined;
    resourceFields: { id: string; name: string; unit: string; } | undefined;
    toolbar: string[] | undefined;
    columns: ({ field: string; visible: boolean; headerText?: undefined; width?: undefined; } | { field: string; headerText: string; width: string; visible?: undefined; } | { field: string; width: string; visible?: undefined; headerText?: undefined; })[] | undefined;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project initiation',
                StartDate: new Date('03/29/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2,
                        Progress: 30, Work: 16, resources: [{ resourceId: 1, Unit: 70 }, 6]
                    },
                    {
                        TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                        resources: [2, 3, 5], Work: 96
                    },
                    {
                        TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1,
                        Work: 16, resources: [8, { resourceId: 9, Unit: 50 }], Progress: 30
                    },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
                subtasks: [
                    {
                        TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                        Duration: 3, Progress: 30, resources: [{ resourceId: 4, Unit: 50 }], Work: 30
                    },
                    {
                        TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
                        Work: 48, resources: [4, 8]
                    },
                    {
                        TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
                        Duration: 2, Work: 60, resources: [12, { resourceId: 5, Unit: 70 }]
                    }
                ]
            },
            {
                TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
                Progress: 30, resources: [12], Work: 24
            }
        ];
        this.resources = [
            { resourceId: 1, resourceName: 'Martin Tamer' },
            { resourceId: 2, resourceName: 'Rose Fuller' },
            { resourceId: 3, resourceName: 'Margaret Buchanan' },
            { resourceId: 4, resourceName: 'Fuller King' },
            { resourceId: 5, resourceName: 'Davolio Fuller' },
            { resourceId: 6, resourceName: 'Van Jack' },
            { resourceId: 7, resourceName: 'Fuller Buchanan' },
            { resourceId: 8, resourceName: 'Jack Davolio' },
            { resourceId: 9, resourceName: 'Tamer Vinet' },
            { resourceId: 10, resourceName: 'Vinet Fuller' },
            { resourceId: 11, resourceName: 'Bergs Anton' },
            { resourceId: 12, resourceName: 'Construction Supervisor' }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            child: 'subtasks'
        };
        this.editSettings= {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.resourceFields= {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'Unit'
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        this.columns= [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Task Name', width: '180' },
            { field: 'resources', headerText: 'Resources', width: '160' },
            { field: 'Work', width: '110' },
            { field: 'Duration', width: '100' },
            { field: 'taskType', headerText: 'Task Type', width: '110' }
        ];
    }
}



