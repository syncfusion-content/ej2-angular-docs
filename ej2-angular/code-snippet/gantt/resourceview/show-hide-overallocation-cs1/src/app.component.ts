import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, GanttModule, ToolbarService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" [dataSource]="data" [resources]="resources" [taskFields]="taskSettings"
        [resourceFields]="resourceFields" [editSettings]="editSettings" [columns]="columns" [toolbar]="toolbar" [labelSettings]="labelSettings"
        [splitterSettings]="splitterSettings" [allowSelection]='true' [allowResizing] = 'true' [highlightWeekends] = 'true'
        [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" viewType="ResourceView"
        [showOverAllocation] = 'true' (toolbarClick)="toolbarClick($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent
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
    public splitterSettings?: object;

    public ngOnInit(): void {
        this.data = projectNewData;
        this.resources = [
            { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team' },
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
            { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }];
        this.labelSettings = {
            rightLabel: 'resources',
            taskLabel: 'Progress'
        }
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('07/28/2019');
    }
    
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'showhidebar') {
            this.ganttInstance!.showOverAllocation = this.ganttInstance!.showOverAllocation ? false : true;
        }
    };
}



