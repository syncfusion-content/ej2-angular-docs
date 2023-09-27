


import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [columns]="columns" [splitterSettings] = "splitterSettings" [allowResizing] = 'true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '200',minWidth: '150' ,maxWidth: '250',},
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '100',minWidth: '50' ,maxWidth: '200' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.splitterSettings = {
            columnIndex:4
            };
    }
}



