import { Component, ViewEncapsulation, OnInit, ViewChild, NgIterable } from '@angular/core';
import { GanttComponent, ColumnModel } from '@syncfusion/ej2-angular-gantt';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px"  [dataSource]="data"
        [taskFields]="taskSettings" [treeColumnIndex]='1' [columns]="columns"  [splitterSettings] = "splitterSettings">   
        <e-columns>
            <e-column *ngFor="let column of columns" [field]="column.field" [headerText]="column.headerText" [width]=240></e-column> 
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
    public columns?: NgIterable<ColumnModel> | null | undefined;
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
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'StartDate', headerText: 'Start Date' },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress' }
        ];
        this.splitterSettings = {
            position: '75%'
        };
    }
}