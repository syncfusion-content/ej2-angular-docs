
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttData } from './data';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [
        GanttModule, ButtonModule
   ],
providers: [RowDDService, EditService, SelectionService],
standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='rowdrag' (click)='drag()'>Drag and Drop</button>
        <ejs-gantt id="gantt" #gantt height="450px" [dataSource]="data" [treeColumnIndex]='1' [splitterSettings]="splitterSettings"
        [allowRowDragAndDrop]='true' 
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
export class AppComponent {
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public message?: string;
    public taskSettings?: object;
    public splitterSettings?: object;
    public editSettings?: object;
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
    drag(): void {
        (this.gantt as GanttComponent).reorderRows([1], 2, 'below')
    }
}



