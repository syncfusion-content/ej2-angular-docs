


import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [splitterSettings] = "splitterSettings" [taskFields]="taskSettings">
       <e-columns>
            <e-column field='TaskName' width='150'><ng-template #headerTemplate>
        <div>
            <img src="taskname.png" width="20" height="20" class="e-image" />  Task Name
        </div></ng-template> </e-column>
         <e-column field='StartDate' width='150'><ng-template #headerTemplate>
        <div>
            <img src="startdate.png" width="20" height="20" class="e-image" />  Start Date
        </div></ng-template> </e-column>
         <e-column field='Duration' width='150'><ng-template #headerTemplate>
        <div>
            <img src="duration.png" width="20" height="20" class="e-image" />  Duration
        </div></ng-template> </e-column>
         <e-column field='Progress' width='150'><ng-template #headerTemplate>
        <div>
            <img src="progress.png" width="20" height="20" class="e-image" />  Progress
        </div></ng-template> </e-column>
        </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ];
        this.splitterSettings = {
            columnIndex:4
            };
    }
}



