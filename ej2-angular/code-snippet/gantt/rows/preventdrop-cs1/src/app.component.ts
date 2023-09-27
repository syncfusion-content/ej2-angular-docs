


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ganttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings" (rowDrop)="rowDrop($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public ngOnInit(): void {
        this.data = ganttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
    }
    public rowDrop(args: any) {
        if (args.dropPosition == "middleSegment") {
            args.cancel = true;
        }
    };
}



