import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, ToolbarService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="430px" [dataSource]="data" [resources]="resources" [taskFields]="taskSettings" [resourceFields]="resourceFields" [editSettings]="editSettings" [columns]="columns" [toolbar]="toolbar" [labelSettings]="labelSettings" [splitterSettings]="splitterSettings" [allowSelection]='true' [allowResizing] = 'true' [highlightWeekends] = 'true' [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" viewType="ResourceView"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{
    public data?: object[];
    public resources?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public resourceFields?: object;
    public editSettings?: object;
    public columns?: object[];
    public toolbar?: string[];
    public splitterSettings?: object;

    public ngOnInit(): void {
        this.data = projectNewData;
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
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        this.labelSettings = {
            rightLabel: 'resources'
        };
        this.splitterSettings = {
            columnIndex: 3
        };
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
    }
}