import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings" [allowSorting]='true'
        [allowFiltering]='true'  [allowReordering]='true' [allowResizing]='true'>        
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120 [allowSorting]="false"></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=270 [allowFiltering]='false'></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=150></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=150></e-column>
        </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: Gantt
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
            child: 'subtasks',
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}