


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { projectNewData } from './data';
import { EditSettingsModel } from '@syncfusion/ej2-angular-gantt';


@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [editSettings]="editSettings"
       [allowFiltering]='true' [allowResizing]='true' [allowSorting]='true' [allowReordering] = 'true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public editSettings?: EditSettingsModel;
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
        this.editSettings = {
            allowEditing: true
        };
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'Progress', headerText: 'Progress', allowReordering: false },
            { field: 'TaskName', headerText: 'Task Name', allowSorting: false },
            { field: 'StartDate', headerText: 'Start Date', allowEditing: false },
            { field: 'Duration', headerText: 'Duration', allowFiltering: false }
        ];
        this.splitterSettings = {
            columnIndex: 5
        };
    }
}



