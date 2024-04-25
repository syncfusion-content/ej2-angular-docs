
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `
        <button ejs-button id='reordersingle' cssClass="e-info" (click)='reorderSingleColumnByTargetIndex()'>Reorder single column</button>
        <button ejs-button id='reordermultiple' cssClass="e-info" (click)='reorderMultipleColumnByTargetIndex()'>Reorder Multiple columns</button>
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
    reorderSingleColumnByTargetIndex(): void {
        (this.gantt as GanttComponent).treeGrid.grid.reorderColumnByTargetIndex("TaskID", 3); // move column with field name "TaskID" to index 3
    }
    reorderMultipleColumnByTargetIndex(): void {
        (this.gantt as GanttComponent).treeGrid.grid.reorderColumnByTargetIndex(['TaskID', 'TaskName'], 3); // move columns with field name "TaskID" and "TaskName" to index 3
    }
}
