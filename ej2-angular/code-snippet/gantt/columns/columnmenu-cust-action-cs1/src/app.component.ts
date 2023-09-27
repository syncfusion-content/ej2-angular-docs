


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { projectNewData } from './data';
import { ColumnMenuOpenEventArgs, ColumnMenuItemModel } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data"  [taskFields]="taskSettings" [columns]="columns" [allowFiltering] = 'true' [allowResizing] = 'true' [showColumnMenu] = 'true' [allowSorting] = 'true' [splitterSettings]="splitterSettings" [sortSettings]='sortSettings'
       (columnMenuOpen)='columnMenuOpen($event)'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
sortSettings: any;
    public columnMenuOpen(args: ColumnMenuOpenEventArgs) {
        for (const item of args.items) {
            if (item.text === 'Filter' && args.column!.field === 'TaskName') {
                (item as ColumnMenuItemModel).hide = true;
            } else {
                (item as ColumnMenuItemModel).hide = false;
            }
        }
    }
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
             position: '75%'
        };
    }
}



