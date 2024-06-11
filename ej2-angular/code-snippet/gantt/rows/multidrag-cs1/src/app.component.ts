
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';

@Component({
    imports: [
        GanttModule,
    ],
    providers: [RowDDService, SelectionService, EditService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [treeColumnIndex]='1' [allowRowDragAndDrop]='true'
       [taskFields]="taskSettings" [selectionSettings]="selectionSettings" [splitterSettings] = "splitterSettings">
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
    public data?: object[];
    public taskSettings?: object;
    public selectionSettings?: object;
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
        this.selectionSettings = {
            type: 'Multiple'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}



