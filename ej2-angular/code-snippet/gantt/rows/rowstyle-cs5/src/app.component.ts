
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

import { Component, ViewEncapsulation, OnInit, ViewChild, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
        GanttModule, ButtonModule
   ],
standalone: true,
    selector: 'app-root',
    template:
        `<div>
          <button ejs-button id="small" cssClass="e-small" (click)="clickHandler($event)">
          Change height 20px</button>
          <button ejs-button id="medium" cssClass="e-small" (click)="clickHandler($event)">
          Default height 42px</button>
          <button ejs-button  id="big" cssClass="e-small" (click)="clickHandler($event)">
          Change height 60px</button>
        </div>
        <ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data" rowHeight='42'
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings" >    
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=90 ></e-column>
                <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=120 ></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=90 ></e-column>
                <e-column field='Progress' headerText='Progress' textAlign='Right' width=120></e-column>
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
    public heightRow: { [key: string]: number } = {
        small: 20,
        medium: 40,
        big: 60
    };
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
    clickHandler(args: MouseEvent): void {
        (this.gantt as GanttComponent).rowHeight = this.heightRow[(args.target as HTMLElement).id];
    }
}
