


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { projectViewMultiTaskData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" [dataSource]="data" [enableMultiTaskbar]="true" [taskFields]="taskSettings" [treeColumnIndex]="1" [allowSelection]="true" height="430px"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: Object[];
    public taskSettings?: object;
    public ngOnInit(): void {
        this.data = projectViewMultiTaskData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            progress: 'Progress',
            child: 'subtasks',
            expandState: 'isExpand'
        };
        
    }
}



