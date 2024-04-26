import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { SortService,RowDDService,FilterService,ResizeService,ReorderService, ToolbarService, EditService,UndoRedoService,ColumnMenuService } from '@syncfusion/ej2-angular-gantt'




import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { ToolbarItem, EditSettingsModel, GanttAction } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
imports: [
         GanttModule
    ],

providers: [SortService,RowDDService,FilterService,ResizeService,ReorderService, ToolbarService, EditService,UndoRedoService,ColumnMenuService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [allowSorting]='true' [allowFiltering]='true' [toolbar]="toolbar" [enableUndoRedo]='true' [showColumnMenu]='true'
       [allowResizing]='true' [allowReordering]='true' [allowRowDragAndDrop]='true' [taskFields]="taskSettings" [undoRedoActions]="undoRedoActions" [editSettings] = "editSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItem[];
    public undoRedoActions?: GanttAction[];
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
        'PrevTimeSpan', 'NextTimeSpan','Undo','Redo'],
        this.undoRedoActions = ['Edit', 'Delete']
    }
}



