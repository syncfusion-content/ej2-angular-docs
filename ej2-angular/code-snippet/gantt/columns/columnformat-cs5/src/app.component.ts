import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [splitterSettings] = "splitterSettings" [columns]="columns" [taskFields]="taskSettings">         
            <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 format='N' type='number'></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=150 ></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=90></e-column>
            <e-column field='Progress' headerText='Progress(%)' textAlign='Right' width=90 format= 'P2'></e-column>
            <e-column field='Progress' headerText='Progress($)' textAlign='Right' width=90 format='C' type='number'></e-column>

       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
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
        this.columns = [
            { field: 'TaskID', headerText: 'TaskID', textAlign: 'Left', width: 90, },
            { field: 'TaskName', headerText: 'TaskName', textAlign: 'Left', width: 150, },
            { field: 'StartDate', headerText: 'StartDate', textAlign: 'Left', width: 120, format: 'yMd' },
            { field: 'Duration', headerText: 'Duration', textAlign: 'Left', width: 90, },
            { field: 'Progress', headerText: 'Progress', textAlign: 'Left', width: 90, format: 'P' },
        ];
        this.splitterSettings = {
            position: '75%'
        };
    }
}