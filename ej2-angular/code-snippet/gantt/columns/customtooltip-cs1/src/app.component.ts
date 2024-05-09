
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { TooltipAllModule } from "@syncfusion/ej2-angular-popups";

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttData } from './data';
import { TooltipComponent, TooltipEventArgs } from "@syncfusion/ej2-angular-popups";

@Component({
    imports: [
         GanttModule, TooltipAllModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<div class="control-section" >
            <ejs-tooltip #tooltip (beforeRender)="beforeRender($event)" target=".e-headertext">
                <ejs-gantt id="ganttDefault" #tooltip height="430px"  [dataSource]="data" 
                [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">     
                <e-columns>
                    <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                    <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                    <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                    <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                    <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-gantt>
            </ejs-tooltip>
        </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('tooltip')
    public toolTip?: TooltipComponent;
    public columnDescriptions: { [key: string]: string } = {
        "Task ID": "A unique id for the task.",
        "Task Name": "The name of the task.",
        "Start Date": "The starting date of the task.",
        "Duration": "The total duration of the task.",
        "Progress": "The current tasks progress.",
    };
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
    beforeRender(args: TooltipEventArgs) {
        const description = this.columnDescriptions[args.target.innerText];
        if (description) {
            (this.toolTip as TooltipComponent).content = args.target.innerText + ": " + description;
        }
    }
}
