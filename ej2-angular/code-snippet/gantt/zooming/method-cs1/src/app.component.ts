


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='zoomIn' (click)='zoomIn()'>ZoomIn</button>
        <button ejs-button id='zoomOut' (click)='zoomOut()'>ZoomOut</button>
        <button ejs-button id='fitToProject' (click)='fitToProject()'>FitToProject</button>
        <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
    }
    zoomIn(): void {
        this.ganttObj.zoomIn();
        };
        zoomOut(): void {
        this.ganttObj.zoomOut();
        };
        fitToProject(): void{
        this.ganttObj.fitToProject();
        };
}



