import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [labelSettings]="labelSettings" [resourceFields]="resourceFields" [columns]="columns" [resources]="resources"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    public data?: object[];
    public resources?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public resourceFields?: object;
    public columns?: object[];

    public ngOnInit(): void {
        this.data = projectNewData
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            child: 'subtasks'
        };
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'Unit'
        };
        this.columns = [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Task Name', width: '180' },
            { field: 'resources', headerText: 'Resources', width: '160' },
            { field: 'Duration', width: '100' }
        ];
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
        this.resources = [
            { resourceId: 1, resourceName: 'Martin Tamer' },
            { resourceId: 2, resourceName: 'Rose Fuller' },
            { resourceId: 3, resourceName: 'Margaret Buchanan' },
            { resourceId: 4, resourceName: 'Fuller King' },
            { resourceId: 5, resourceName: 'Davolio Fuller' },
            { resourceId: 6, resourceName: 'Van Jack' },
            { resourceId: 7, resourceName: 'Fuller Buchanan' },
            { resourceId: 8, resourceName: 'Jack Davolio' },
            { resourceId: 9, resourceName: 'Tamer Vinet' },
            { resourceId: 10, resourceName: 'Vinet Fuller' },
            { resourceId: 11, resourceName: 'Bergs Anton' },
            { resourceId: 12, resourceName: 'Construction Supervisor' }
        ];
    }
}



