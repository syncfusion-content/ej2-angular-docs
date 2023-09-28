


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ganttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='dynamicDrag' (click)='dynamicDrag()'>Drop records as child</button>
       <br><br><br>
       <ejs-gantt #gantt id="ganttDefault" height="450px" [dataSource]="data" [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    @ViewChild('gantt')
    public ganttObj?: GanttComponent;
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
    dynamicDrag(): void {
        this.ganttObj!.reorderRows([1,2,3], 4, 'child');
        };
    }



