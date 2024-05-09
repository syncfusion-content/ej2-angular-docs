import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<div class="control-section">
        <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
        <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]='1' (expanding)="expanding($event)" (collapsing)="collapsing($event)" (collapsed)="collapsed($event)"
        (expanded)="expanded($event)" [splitterSettings] = "splitterSettings">
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
        </e-columns>
        </ejs-gantt>
       </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public message?: string;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
    expanding(args: any): void {
        this.message = 'Expanding event is triggered';
    }
    collapsing(args: any): void {
        this.message = 'Collapsing event is triggered';
    }
    expanded(args: any): void {
        this.message = 'Expanded event is triggered';
    }
    collapsed(args: any): void {
        this.message = 'Collapsed event is triggered';
    }
}