
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { RowDDService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttData } from './data';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [
        GanttModule,
    ],
    providers: [RowDDService, SelectionService, EditService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="gantt" #gantt height="450px" [dataSource]="data" [treeColumnIndex]='1' [splitterSettings]="splitterSettings"
        [allowRowDragAndDrop]='true' [allowTaskbarDragAndDrop]='true' [editSettings]="editSettings"
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
            position: '50%'
        };
        this.editSettings = {
            allowTaskbarEditing: true,
        };
    }
}



