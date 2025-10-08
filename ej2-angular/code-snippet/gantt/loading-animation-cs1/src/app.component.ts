import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { virtualData } from './data';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="450px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1"
        [splitterSettings]="splitterSettings" [columns]="columns" [allowSorting]= 'true' [allowFiltering]= 'true' [labelSettings]="labelSettings"
        [allowSelection]="true" [enableVirtualization]="true" [loadingIndicator]="loadingIndicator"  [highlightWeekends]="true">
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public loadingIndicator?: object;
    public columns?: object[];
    public labelSettings?: object;

    public ngOnInit(): void {
        this.data = virtualData,
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        };
        this.loadingIndicator = { indicatorType: 'Shimmer' }
        this.columns = [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ];
        this.splitterSettings = {
            columnIndex: 2
        };
        this.labelSettings = {
            leftLabel: 'TaskName',
            taskLabel: 'Progress'
        };
    }
}