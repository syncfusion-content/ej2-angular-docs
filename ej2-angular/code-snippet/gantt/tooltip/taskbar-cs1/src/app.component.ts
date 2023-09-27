


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"  [columns]="columns" [tooltipSettings]="tooltipSettings">
       <ng-template #tooltipSettingsTaskbar let-data>
        <div> <ng-container>TaskID: {{data.TaskID}}</ng-container> </div>
       </ng-template></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
   
    public data?: object[];
    public taskSettings?: object;
    public tooltipSettings?: object;
columns: any;

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                baselineStartDate:"BaselineStartDate",
                baselineEndDate:"BaselineEndDate",
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
        };
        this.tooltipSettings = {
                showTooltip: true
        };
    }
}



