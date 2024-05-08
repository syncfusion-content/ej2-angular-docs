
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule, DropDownListModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1'  [splitterSettings] = "splitterSettings">  
            <e-columns>
                <e-column field='TaskID' headerText='Task ID'  width=90></e-column>
                <e-column field='TaskName' headerText='Task Name' width=290 ></e-column>
                <e-column field='Priority' headerText='Task Priority'width='200'>
                    <ng-template #template let-data>
                        <div>
                            <ejs-dropdownlist [value]='data.Priority' width="100" [dataSource]='dropData' [popupHeight]='150' [popupWidth]='150' >
                            </ejs-dropdownlist>
                        </div>
                    </ng-template>
                </e-column>
                <e-column field='Duration' headerText='Duration' width=90></e-column>
                <e-column field='Progress' headerText='Progress' width=120 ></e-column>
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
    public dropData?: string[];
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            priority: 'Priority',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
        this.dropData = ['High', 'Medium', 'Low'];
    }
}
