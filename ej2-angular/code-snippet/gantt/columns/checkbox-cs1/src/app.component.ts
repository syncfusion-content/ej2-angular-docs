


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings] = "splitterSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            verified: 'verified'
        };
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'verified', headerText: 'Verified', displayAsCheckBox: true, type: 'boolean' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.splitterSettings = {
            columnIndex: 5
        };
    }
}



