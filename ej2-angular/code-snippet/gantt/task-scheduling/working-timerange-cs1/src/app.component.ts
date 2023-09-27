


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" highlightWeekends='true' [timelineSettings]="timelineSettings" [dayWorkingTime]="dayWorkingTime" [splitterSettings]="splitterSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
     public timelineSettings?: object;
     public editSettings?: EditSettingsModel;
     public dayWorkingTime?: object;
    public splitterSettings?: object;
    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
           id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate:'EndDate',
            duration:'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.timelineSettings = {
            timelineViewMode:'Day'
            };
        this.dayWorkingTime = [
            {from: 9,
            to: 18 }
       ];
       this.splitterSettings = {
           columnIndex:0
           }
    }
}



