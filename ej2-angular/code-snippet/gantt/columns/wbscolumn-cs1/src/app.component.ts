import { BrowserModule } from '@angular/platform-browser';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';

import { Component, ViewEncapsulation, ViewChild, OnInit, NgModule } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { WBSData } from './data';


@Component({
    imports: [
         GanttAllModule
    ],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttWbs" #gantt height="450px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns"
      [timelineSettings]="timelineSettings" [labelSettings]="labelSettings" [editSettings]="editSettings"
      [allowFiltering]="true" [allowSorting]="true" [toolbar]="toolbar" [treeColumnIndex]="2"
      [filterSettings]="filterSettings" [allowSelection]="true" [projectStartDate]="projectStartDate"
      [projectEndDate]="projectEndDate" [enableWBS]="true" [enableAutoWbsUpdate]="true"
      [splitterSettings]="splitterSettings" [rowHeight]="rowHeight" [taskbarHeight]="taskbarHeight"
      [allowUnscheduledTasks]="allowUnscheduledTasks" [eventMarkers]="eventMarkers">
    </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('gantt')
    public ganttObj?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public columns?: object[];
    public toolbar?: string[];
    public editSettings?: object;
    public splitterSettings?: object;
    public selectionSettings?: object;
    public tooltipSettings?: object;
    public filterSettings?: object;
    public timelineSettings?: object;
    public labelSettings?: object;
    public height?: string;
    public taskbarHeight?: number;
    public rowHeight?: number;
    public allowUnscheduledTasks?: boolean;
    public enableWBS?: boolean;
    public enableAutoWbsUpdate?: boolean;
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    public eventMarkers?: object[];
    public ngOnInit(): void {
        this.data = WBSData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        };
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', visible: false },
            { field: 'WBSCode', headerText: 'WBS Code', width: '150px' },
            { field: 'TaskName', headerText: 'Task Name', allowReordering: false, width: '260px' },
            { field: 'StartDate', headerText: 'Start Date', width: '140px' },
            { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190px' },
            { field: 'Duration', headerText: 'Duration', allowEditing: false, width: '130px' },
            { field: 'Progress', headerText: 'Progress' },
        ];
        this.eventMarkers = [
            {
                day: new Date('04/2/2024'),
                label: 'Project Initiation'
            }
        ];
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        };
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
        this.splitterSettings = { columnIndex: 4 };
        this.selectionSettings = { mode: 'Row', type: 'Single', enableToggle: false };
        this.tooltipSettings = { showTooltip: true };
        this.filterSettings = { type: 'Menu' };
        this.timelineSettings = {
            showTooltip: true,
            topTier: { unit: 'Week', format: 'dd/MM/yyyy' },
            bottomTier: { unit: 'Day', count: 1 }
        };
        this.labelSettings = {
            taskLabel: '${Progress}%'
        };
        this.taskbarHeight = 20;
        this.rowHeight = 40;
        this.height = '550px';
        this.allowUnscheduledTasks = true;
        this.enableWBS = true;
        this.enableAutoWbsUpdate = true;
        this.projectStartDate = new Date('03/31/2024');
        this.projectEndDate = new Date('05/30/2024');
    }
}