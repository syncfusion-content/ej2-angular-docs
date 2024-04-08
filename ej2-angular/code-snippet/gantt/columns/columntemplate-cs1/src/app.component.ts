import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [splitterSettings] = "splitterSettings"  [taskFields]="taskSettings">
        <e-columns>
                    <e-column field='TaskID' headerText='TaskID' textAlign='Left' width=90></e-column>
                    <e-column field='TaskName' headerText='TaskName' textAlign='Left' width=150></e-column>
                    <e-column field='StartDate'  headerText='StartDate' textAlign=Left width=120>
                    <ng-template #template let-data>
                    {{ data.StartDate | date:'yyyy/MMM/dd' }}
                    </ng-template>
                    </e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Left' width=150></e-column>
                    <e-column field='Progress' headerText='Progress' textAlign=Left width=150></e-column>
                </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.splitterSettings = {
            columnIndex: 4
        };
    }
}