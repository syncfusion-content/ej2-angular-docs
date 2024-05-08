import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'




import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ganttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
imports: [
         GanttModule
    ],

providers: [RowDDService, EditService, SelectionService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings"></ejs-gantt>`,
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
}



