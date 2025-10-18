import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="taskData" [taskFields]="taskSettings"  [labelSettings]="labelSettings"  [projectStartDate]="projectStartDate"  [projectEndDate]="projectEndDate">
        </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public taskData?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public columns?: object[];
    public projectStartDate?: Date;
    public projectEndDate?: Date;

    public ngOnInit(): void {
        this.taskData = projectNewData;
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentId',
        };
        this.labelSettings = {
            leftLabel: 'Task Id: ${taskData.TaskId}',
            rightLabel: 'Progress Value: ${taskData.Progress}',
            taskLabel: '${Progress}%'
        }
        this.projectStartDate = new Date('03/28/2019');
        this.projectEndDate = new Date('04/18/2019');
    }
}