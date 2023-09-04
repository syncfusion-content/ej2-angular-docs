import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { tempData, virtualData } from './data';
@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="450px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1"
        [splitterSettings]="splitterSettings" [columns]="columns" [allowSorting]= 'true' [allowFiltering]= 'true' [labelSettings]="labelSettings"
        [allowSelection]="true" [enableVirtualization]="true" [loadingIndicator]="loadingIndicator"  [highlightWeekends]="true"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public loadingIndicator?: object;
    public columns?: object[];
    public labelSettings?: object;
    public ngOnInit(): void {
        let projId: number = 1;
        for (let i: number = 0; i < 50; i++) {
            let x: number = virtualData.length + 1;
            let parent: any = {};
            /* tslint:disable:no-string-literal */
            parent['TaskID'] = x;
            parent['TaskName'] = 'Project ' + (i + 1);
            virtualData.push(parent);
            for (let j: number = 0; j < tempData.length; j++) {
                let subtasks: any = {};
                /* tslint:disable:no-string-literal */
                subtasks['TaskID'] = tempData[j].TaskID + x;
                subtasks['TaskName'] = tempData[j].TaskName;
                subtasks['StartDate'] = tempData[j].StartDate;
                subtasks['Duration'] = tempData[j].Duration;
                subtasks['Progress'] = tempData[j].Progress;
                subtasks['parentID'] = tempData[j].parentID + x;
                virtualData.push(subtasks);
            }
        }
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