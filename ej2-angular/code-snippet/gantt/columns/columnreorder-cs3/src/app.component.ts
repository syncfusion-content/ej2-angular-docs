
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule, ReorderService } from '@syncfusion/ej2-angular-buttons';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule, ButtonModule
    ],
providers: [ReorderService],
standalone: true,
    selector: 'app-root',
    template:
        `
        <button ejs-button id='reordersingle' cssClass="e-info" (click)='reorderSingleColumnUsingFieldName()'>Reorder single Column</button>
        <button ejs-button id='reordermultiple' cssClass="e-info" (click)='reorderMultipleColumnsUsingFieldName()'>Reorder Multiple Columns</button>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" [allowReordering]='true' 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">       
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
export class AppComponent {
    // Data for Gantt
    @ViewChild('gantt')
    public gantt?: GanttComponent;
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
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    reorderSingleColumnUsingFieldName(): void {
        (this.gantt as GanttComponent).reorderColumns("TaskName", "TaskID");
    }
    reorderMultipleColumnsUsingFieldName(): void {
        (this.gantt as GanttComponent).reorderColumns(['TaskName', 'StartDate', 'Duration'], "TaskID");
    }
}
