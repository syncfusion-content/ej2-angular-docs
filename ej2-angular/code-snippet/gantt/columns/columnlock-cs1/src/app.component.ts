import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './data';
import { ReorderService } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px" [columns]='columns' [dataSource]="data" [taskFields]="taskSettings"  [splitterSettings] = "splitterSettings" [allowReordering]='true'>
       </ejs-gantt>`,
    providers: [ReorderService],
    styleUrls:['/app.component.css'],
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
            { field: 'TaskName', headerText: 'Task Name', width: '150', lockColumn: true, customAttributes: {class: 'customcss'} },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.splitterSettings = {
            position: '50%'
        };
        this.customAttributes = {class: 'customcss'};
    }
}