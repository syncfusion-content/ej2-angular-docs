


import { Component, ViewEncapsulation, OnInit,  ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ToolbarItem, ZoomTimelineSettings  } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { projectNewData, data } from './data';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='changeData' (click)='changeData()'>Change Data</button>
       <br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"[toolbar]="toolbar" (dataBound)="dataBound($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
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
        this.toolbar =  ['ZoomToFit'];
    }
    public dataBound(args: any) {
      this.ganttObj.fitToProject();
    };
    changeData(): void {
      this.ganttObj.dataSource = data;
    };
}



