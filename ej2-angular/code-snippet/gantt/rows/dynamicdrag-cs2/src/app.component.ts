import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ganttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
imports: [
         GanttModule, ButtonModule
    ],

providers: [RowDDService, EditService, SelectionService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="450px" [dataSource]="data" [allowTaskbarDragAndDrop]='true' [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings" [editSettings]="editSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
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
        this.editSettings= {
            allowEditing: true,
            allowTaskbarEditing: true
        }
        
    }
    }



