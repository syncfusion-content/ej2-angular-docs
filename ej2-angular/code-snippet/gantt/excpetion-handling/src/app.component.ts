import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ReorderService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule
    ],
providers: [ReorderService],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px" (actionFailure)="actionFailure($event)"  [dataSource]="data" [allowReordering]='true' 
        [taskFields]="taskSettings" [treeColumnIndex]='1' [splitterSettings] = "splitterSettings">    
            <e-columns>
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
    @ViewChild('gantt')
    public gantt?: GanttComponent;
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
            position: '50%'
        };
    }
    public actionFailure(args: any) {
        let span: HTMLElement = document.createElement('span');
        ((this.gantt?.element as HTMLElement).parentNode as ParentNode).insertBefore(span,(this.gantt as GanttComponent).element);
        span.style.color = '#FF0000'
        span.innerHTML = args.error[0];
    };
}