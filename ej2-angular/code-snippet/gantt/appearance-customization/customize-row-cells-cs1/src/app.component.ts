


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingData  } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskFields" [columns] = "columns" [splitterSettings] = "splitterSettings" (rowDataBound) = "rowDataBound($event)"  (queryCellInfo) = "queryCellInfo($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskFields?: object;
    public columns?: object[];
    public splitterSettings?: object;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
        ];
        this.splitterSettings = {
            columnIndex:3
            };
            }
    public queryCellInfo(args: any) {
        if (args.column.field == "Progress") {
                if (args.data.Progress < 25)
                  args.cell.style.backgroundColor="lightgreen"
               else
                  args.cell.style.backgroundColor="yellow"
            }
    };
    public rowDataBound(args: any) {
        if(args.data.TaskID==4)
        args.row.style.backgroundColor="red"
        };
}



