import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'




import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ganttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
         GanttModule
    ],

providers: [RowDDService, EditService, SelectionService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings" [selectionSettings]="selectionSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public selectionSettings?: SelectionSettingsModel;
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
        this.selectionSettings = {
            type: 'Multiple'
        };
    }
}



