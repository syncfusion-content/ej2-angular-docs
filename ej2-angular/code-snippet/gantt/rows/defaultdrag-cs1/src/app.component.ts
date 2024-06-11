import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    imports: [
        GanttModule
   ],
providers: [RowDDService, EditService, SelectionService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="450px" [treeColumnIndex]='1' [dataSource]="data" [splitterSettings] = "splitterSettings" [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings">
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
            </e-columns>   
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}



