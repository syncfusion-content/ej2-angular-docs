

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-gantt';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [splitterSettings]="splitterSettings" [gridLines]='gridLines'
       (queryCellInfo)='queryCellInfoEvent($event)'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public gridLines?: string;
    public queryCellInfoEvent: EmitType<QueryCellInfoEventArgs> = (args: QueryCellInfoEventArgs) => {
        switch((args.data! as any).TaskID) {
            case 1:
            if ((args.column!.field == 'work1') && ((args.data!.taskData! as any).work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 2:
            if ((args.column!.field == 'work1') && ((args.data!.taskData! as any) == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 3:
            if ((args.column!.field == 'work1') && ((args.data!.taskData! as any) == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 4:
            if ((args.column!.field == 'work1') && ((args.data!.taskData! as any) == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 5  :
            if ((args.column!.field == 'work1') && ((args.data!.taskData! as any) == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 7:
            if ((args.column!.field == 'work1') && ((args.data!.taskData! as any) == 'support')) {
                args.colSpan = 2;
            }
            break;
        }
    }
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
            work1: 'work1',
            work2: 'work2',
        };
        this.gridLines = 'Both';
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'work1', headerText: 'Work 1' },
            { field: 'work2', headerText: 'Work 2' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' }
        ];
        this.splitterSettings = {
            columnIndex: 5
        };
    }
}



