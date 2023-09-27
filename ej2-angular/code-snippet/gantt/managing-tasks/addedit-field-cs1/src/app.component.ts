


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { editingResources } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"  [editDialogFields]="editDialogFields" [editSettings]="editSettings" [resourceNameMapping]= "resourceNameMapping" [toolbar]="toolbar" [resourceFields]="resourceFields" [resources]= "resources" [labelSettings]="labelSettings" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public editDialogFields?: object[];
    public resourceNameMapping?: string;
    public resourceIdMapping?: string;
    public toolbar?: ToolbarItem[];
    public resources?: object[];
    public labelSettings?: object;
    public editSettings?: EditSettingsModel;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public resourceFields?: object;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                notes: 'info',
                resourceInfo: 'resources'
        };
        this.editDialogFields = [
                { type: 'General', headerText: 'General', fields: ['TaskID', 'TaskName', 'isParent'] },
                { type: 'Dependency' },
                { type: 'Resources' }
        ];
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
        this.resources = editingResources;
        this.editSettings = {
                allowAdding: true,
                allowEditing: true,
                mode: 'Dialog',
                allowTaskbarEditing: true
        };
        this.labelSettings = {
                leftLabel: 'TaskName',
                rightLabel: 'resources'
        };
        this.toolbar =  ['Add'];
        this.projectStartDate = new Date('03/28/2019');
        this.projectEndDate = new Date('04/14/2019');
    }
}



