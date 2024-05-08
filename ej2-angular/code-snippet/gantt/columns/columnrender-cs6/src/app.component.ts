import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
        <e-columns>
            <e-column field='TaskID' headerText='Task ID'  width=100></e-column>
            <e-column field='TaskName' headerText='Task Name' width=290 [valueAccessor]='concatenateFields'></e-column>
            <e-column field='Duration' headerText='Duration' width=90></e-column>
            <e-column field='Progress' headerText='Progress' width=120 [valueAccessor]='percentageFormatter'></e-column>
        </e-columns>   
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public taskSettings?: object;
    public splitterSettings?: object;
    public percentageFormatter = (field: string, valueAccessordata: object, column: object) => {
        return (valueAccessordata as any)["Progress"] + '%';
    }

    public concatenateFields = (field: string, valueAccessordata: object, column: object) => {
        return (valueAccessordata as any)[field] + ' - ' + (valueAccessordata as any)["TaskID"];
    }
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
}