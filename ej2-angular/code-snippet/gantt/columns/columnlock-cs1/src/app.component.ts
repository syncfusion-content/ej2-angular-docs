import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, ReorderService } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';

@Component({
    imports: [
         GanttModule
    ],
providers: [ReorderService],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px" [columns]='columns' [dataSource]="data"  [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings" [allowReordering]='true'>
       </ejs-gantt>`,
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    @ViewChild('gantt')
    public gantt?: Gantt
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public customAttributes?: Object;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks',
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '270', lockColumn: true, customAttributes: { class: 'customcss' } },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.splitterSettings = {
            position: '75%'
        };
        this.customAttributes = { class: 'customcss' };
    }
}