


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ToolbarItem, SearchSettingsModel } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" [splitterSettings] = "splitterSettings" [columns]="columns" [searchSettings]="searchSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public splitterSettings?: object;
    public searchSettings?: SearchSettingsModel;
    public toolbar?: ToolbarItem[];
    public ngOnInit(): void {
        this.data = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,Progress: 50, resources: [1]},
            {TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',Progress: 50, resources: [2, 3, 5]},
            {TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '4', Progress: 50, resources: [4]},
            {TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),Duration: 3, Predecessor: '6', resources: [4, 8],Progress: 50},
            {TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),Duration: 0, Predecessor: '7', resources: [12, 5]}
        ]
    }];
        this.taskSettings = {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks'
        };
        this.columns = [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.toolbar = ['Search'];
        this.splitterSettings = {
            columnIndex:3
            };
        this.searchSettings = { fields: ['TaskName', 'Duration'] };
    }
}



