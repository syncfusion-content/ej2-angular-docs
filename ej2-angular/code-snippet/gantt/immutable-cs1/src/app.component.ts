import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule,DayMarkersService, ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
    imports: [GanttModule],
    providers: [DayMarkersService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings"
       [toolbar]="toolbar" enableImmutableMode="true"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];

    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Indent', 'Outdent'];
    }
}