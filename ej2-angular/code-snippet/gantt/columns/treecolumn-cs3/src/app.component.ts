
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttData } from './data';

@Component({
    imports: [ GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="370px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" [collapseAllParentTasks]="true">
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' width=90 ></e-column>
                <e-column field='Progress' headerText='Progress' width=120></e-column>
            </e-columns>
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
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
}
