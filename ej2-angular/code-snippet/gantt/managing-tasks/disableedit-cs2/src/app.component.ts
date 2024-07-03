import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { EditService, ToolbarService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ToolbarItem, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { Gantt } from '@syncfusion/ej2-gantt';
import{projectData , editingResources}from "./data" 

@Component({
imports: [
         GanttModule
    ],
providers: [EditService, ToolbarService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [resources]="resources" [resourceFields]="resourceFields" [taskFields]="taskSettings" [editSettings]="editSettings" [toolbar]="toolbar" [editDialogFields]="editDialogFields" [addDialogFields]="addDialogFields" [columns]="columns"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public resources?: object[];
    public resourceFields?: { id: string; name: string; unit: string; group: string; } | undefined;
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public editDialogFields?: object[];
    public addDialogFields?: object[];
    public toolbar?: ToolbarItem[];
    public columns?: object[];
    public ngOnInit(): void {
        this.data = projectData;
        this.editDialogFields = [
            { type: 'General', headerText: 'General add',fields:["TaskID", "TaskName","newInput"]},
            { type: 'Dependency'},
            { type: 'Resources'}, 
            { type: 'Notes' },
            {type:"Segments"}
        ];
        this.addDialogFields = [
            { type: 'General', headerText: 'General edit', fields: ["TaskID", "TaskName", "newInput"] },
            {type: 'Dependency'},
            { type: 'Resources'},
            {type: 'Notes'},
            {type: "Segments"}
        ];
        this.toolbar =  ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'];
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
            child: 'subtasks',
            segments: 'Segments',
            notes:"note",
        };
        this.resources = editingResources;
        this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName',
            unit: 'resourceUnit',
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
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name', allowEditing: false },
            { field: 'StartDate', headerText: 'Start Date', },
            { field: 'Duration', headerText: 'Duration' },
            { field: 'Progress', headerText: 'Progress'  },
        ];
    }
}



