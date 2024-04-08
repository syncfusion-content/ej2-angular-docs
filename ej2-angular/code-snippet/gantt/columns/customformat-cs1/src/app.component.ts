
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';
@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [splitterSettings] = "splitterSettings"  [taskFields]="taskSettings">
        <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
        <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=150 ></e-column>
        <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 [format]='dateFormatOptions'></e-column>
        <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
        <e-column field='Progress' headerText='Progress' textAlign='Right' width=90 [format]='numberFormatOptions'></e-column>
        </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public numberFormatOptions?: object;
    public dateFormatOptions?: object;
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
        this.dateFormatOptions = {
            // Custom format for date columns
            type: 'date',
            format: "EEE, MMM d, ''yy",
        };
        this.numberFormatOptions = {
            // Custom format for numeric columns
            format: '##.0000',
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}
