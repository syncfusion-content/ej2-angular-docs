


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ToolbarItem, EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" [dataSource]="data" [resources]="resources" [taskFields]="taskSettings"
        [resourceFields]="resourceFields" [editSettings]="editSettings" [columns]="columns" [toolbar]="toolbar" [labelSettings]="labelSettings"
        [splitterSettings]="splitterSettings" [allowSelection]='true' [allowResizing] = 'true' [highlightWeekends] = 'true'
        [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" viewType="ResourceView"
        [showOverAllocation] = 'true' (toolbarClick)="toolbarClick($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    public data?: object[];
    public resources?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent;
    resourceFields: { id: string; name: string; unit: string; group: string; } | undefined;
    editSettings: { allowAdding: boolean; allowEditing: boolean; allowDeleting: boolean; allowTaskbarEditing: boolean; showDeleteConfirmDialog: boolean; } | undefined;
    columns: ({ field: string; visible: boolean; headerText?: undefined; width?: undefined; } | { field: string; headerText: string; width: number; visible?: undefined; } | { field: string; headerText: string; visible?: undefined; width?: undefined; } | { field: string; visible?: undefined; headerText?: undefined; width?: undefined; })[] | undefined;
    toolbar: (string | { text: string; tooltipText: string; id: string; })[] | undefined;
splitterSettings: any;
    public ngOnInit(): void {
        this.data = [
            {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
                Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 70 }], Predecessor: 2, Progress: 30, work: 20
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 25 }], Predecessor: 3, Progress: 30, work: 10,
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'),
                Duration: 5, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 50 }], work: 30
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4,
                resources: [{ resourceId: 2, resourceUnit: 40 }], Predecessor: '6FS-2', Progress: 30, work: 40
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'),
                Duration: 4, resources: [{ resourceId: 2, resourceUnit: 75 }], Predecessor: '7FS-1', Progress: 30, work: 60,
            }
        ]
    },
    {
        TaskID: 9,
        TaskName: 'Site work',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 10, TaskName: 'Install temporary power service', StartDate: new Date('04/01/2019'), Duration: 14,
                Progress: 30, resources: [{ resourceId: 3, resourceUnit: 75 }]
            },
            {
                TaskID: 11, TaskName: 'Clear the building site', StartDate: new Date('04/08/2019'),
                Duration: 9, Progress: 30, Predecessor: '10FS-9', resources: [3]
            },
            {
                TaskID: 12, TaskName: 'Sign contract', StartDate: new Date('04/12/2019'),
                Duration: 5, resources: [3], Predecessor: '11FS-5'
            },
        ]
    }
        ];
        this.resources = [
            { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team'},
            { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team' },
            { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' }
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            resourceInfo: 'resources',
            work: 'work',
            child: 'subtasks'
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'Unit',
            group: 'resourceGroup'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.columns = [
            { field: 'TaskID', visible: false },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'work', headerText: 'Work' },
            { field: 'Progress' },
            { field: 'resourceGroup', headerText: 'Group' },
            { field: 'StartDate' },
            { field: 'Duration' }
        ];
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
        {text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar'}];
        this.labelSettings = {
            rightLabel: 'resources',
            taskLabel: 'Progress'
        }
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'showhidebar') {
            this.ganttObj!.showOverAllocation = this.ganttObj!.showOverAllocation ? false : true;
        }
};
}



