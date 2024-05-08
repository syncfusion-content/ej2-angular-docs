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
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings"> 
            <e-columns>
                <e-column field='TaskID' headerText='TaskID'  width=90></e-column>
                <e-column field='TaskName' headerText='TaskName' width=290 >
                <ng-template #template let-data>
                    <div>
                        <a href="#" (click)="onClick($event, data.TaskName)">
                            {{ data.TaskName }}
                        </a>
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
    onClick(event: MouseEvent, TaskName: string) {
        var url = 'https://www.meaningofthename.com/';
        var searchUrl = url + TaskName;
        window.open(searchUrl);
    }
}