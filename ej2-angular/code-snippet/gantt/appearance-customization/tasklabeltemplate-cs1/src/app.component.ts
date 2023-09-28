


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data"  [taskFields]="taskSettings" [labelSettings]="labelSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public columns?: object[];
    public projectStartDate?: Date;
    public projectEndDate?: Date;
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
        this.labelSettings = {
            leftLabel: 'Task ID: ${taskData.TaskID}',
            rightLabel:'Progress Value: ${taskData.Progress}',
            taskLabel: '${Progress}%'
        }
        this.projectStartDate = new Date('03/28/2019');
        this.projectEndDate = new Date('04/14/2019');
    }
}



