import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GanttModule, EditService, SelectionService, SplitterSettingsModel, EditSettingsModel } from '@syncfusion/ej2-angular-gantt'
import { GanttData, ProjectResources } from './data';
import { Tab } from '@syncfusion/ej2-navigations';
import { Grid, SelectionSettingsModel } from '@syncfusion/ej2-grids';

@Component({
    imports: [GanttModule],
    providers:[EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="Gantt" height="450px" [dataSource]="data" [taskFields]="taskSettings" [splitterSettings]="splitterSettings" [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate" [labelSettings]="labelSettings"
        (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)"
        [editDialogFields]="editDialogFields" [editSettings]="editSettings"
        [resourceFields]="resourceFields" [columns]="columns" [resources]="resources"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    public data?: object[];
    public resources?: object[];
    public taskSettings?: object;
    public labelSettings?: object;
    public projectStartDate?: Date;
    public editDialogFields?: object[];
    public editSettings?: EditSettingsModel;
    public projectEndDate?: Date;
    public splitterSettings?: SplitterSettingsModel;
    public resourceFields?: object;
    public columns?: object[];

    public ngOnInit(): void {
        this.data = GanttData
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            resourceInfo: 'resources',
            parentID: 'ParentID'
        };
        this.labelSettings = {
            leftLabel: 'TaskName',
            rightLabel: 'resources'
        };
        this.editDialogFields = [
            { type: 'Resources' }
        ];
        this.editSettings = {
            allowEditing: true
        };
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'Unit'
        };
        this.columns = [
            { field: 'TaskID',  width: '70' },
            { field: 'TaskName', headerText: 'Task Name', width: '220' },
            { field: 'resources', headerText: 'Resources', width: '160' },
            { field: 'Duration', width: '100' }
        ];
        this.splitterSettings = {
            columnIndex: 3
        };
        this.projectStartDate = new Date('03/25/2019');
        this.projectEndDate = new Date('04/28/2019');
        this.resources = ProjectResources
    }

    public actionBegin(args: any) {
        if (args.requestType == 'beforeOpenEditDialog') {
            // Remove the checkbox column from the Resources tab.
            args.Resources.columns.splice(0, 1);
            // Disable resource selection for a specific task.
            if (args.rowData.TaskID == 3) {
                args.Resources.allowSelection = false;
            }
        }
    }

    public actionComplete(args: any) {
        if (args.requestType == 'openEditDialog') {
            // Get the Resources tab instance.
            let tabObj: Tab = (document.getElementById('Gantt_Tab') as any).ej2_instances[0];
            // Get the resource Grid instance from the Resources tab.
            let gridObj: Grid = (document.getElementById('GanttResourcesTabContainer_gridcontrol') as any).ej2_instances[0];
            // Configure the resource grid to allow only a single selection.
            gridObj.selectionSettings = {
                checkboxOnly: false,
                type: 'Single',
                persistSelection: false
            }  as SelectionSettingsModel;
        }
    }
}



