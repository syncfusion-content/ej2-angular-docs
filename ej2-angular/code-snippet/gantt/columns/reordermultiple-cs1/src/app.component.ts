


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='reordercolumns' (click)='reorderColumns()'>Reorder Multiple Columns</button>
       <br><br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [columns]="columns" [splitterSettings] = "splitterSettings" [allowReordering] = 'true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent;
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
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.splitterSettings = {
            columnIndex:4
            };
    };
    reorderColumns(): void {
        this.ganttObj!.reorderColumns('TaskName'  ,'Progress');
        };
}



