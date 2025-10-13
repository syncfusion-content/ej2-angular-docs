import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, VirtualScrollService } from '@syncfusion/ej2-angular-gantt'
import { ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { virtualData } from './data';

@Component({
    imports: [GanttModule],
    providers: [VirtualScrollService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt height="450px" [dataSource]="data" [taskFields]="taskSettings" [treeColumnIndex]="1"
        [splitterSettings]="splitterSettings" [columns]="columns" [labelSettings]="labelSettings"
        [allowSelection]="true" [enableVirtualization]="true"  [autoCalculateDateScheduling]="false" [editSettings] = "editSettings" [highlightWeekends]="true"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columns?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public labelSettings?: object;

    public ngOnInit(): void {
        this.data = virtualData,
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'parentID'
        };
        this.columns = [
            { field: 'TaskID' },
            { field: 'TaskName' },
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' }
        ];
        this.splitterSettings = {
            columnIndex: 2
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        this.toolbar = ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'NextTimeSpan', 'PrevTimeSpan', 'Search', 'Update', 'Indent', 'Outdent']
        this.labelSettings = {
            leftLabel: 'TaskName',
            taskLabel: 'Progress'
        };
    }
}



