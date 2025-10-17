import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttAllModule, ToolbarService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { projectNewData } from './data';

@Component({
    imports: [GanttAllModule],
    providers: [ToolbarService, EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt [dataSource]="data" [resources]="resources" [taskFields]="taskSettings"
        [resourceFields]="resourceFields" [editSettings]="editSettings" [columns]="columns" [toolbar]="toolbar" [labelSettings]="labelSettings"
        [allowSelection]='true' [allowResizing] = 'true' [highlightWeekends] = 'true' [treeColumnIndex]="1" [allowTaskbarDragAndDrop] = 'true'
        [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" viewType="ResourceView" [showOverAllocation] = 'true'
        [enableMultiTaskbar]= 'true' ></ejs-gantt>`,
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
    public editSettings?: object;
    public columns?: object[];
    public toolbar?: (string | object)[];

    public ngOnInit(): void {
        this.data = projectNewData;
        this.resources = [
            { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', isExpand: false },
            { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', isExpand: true },
            { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team', isExpand: false }
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
            expandState: 'isExpand',
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
            { field: 'TaskID' },
            { field: 'TaskName', headerText: 'Name', width: 250 },
            { field: 'work', headerText: 'Work' },
            { field: 'Progress' },
            { field: 'resourceGroup', headerText: 'Group' },
            { field: 'StartDate' },
            { field: 'Duration' }
        ];
        this.toolbar = ['ExpandAll', 'CollapseAll'];
        this.labelSettings = {
            rightLabel: 'resources',
            taskLabel: 'TaskName'
        };
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
    }
}



