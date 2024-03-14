


import { Component, ViewEncapsulation, OnInit,ViewChild } from '@angular/core';

import { ToolbarItem, EditSettingsModel, GanttAction,GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='undo' (click)='undo()'>Undo</button>
       <button ejs-button id='redo' (click)='redo()'>Redo</button> 
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [allowSorting]='true' [allowFiltering]='true' [toolbar]="toolbar" [enableUndoRedo]='true' [showColumnMenu]='true'
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
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
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
        this.undoRedoActions = ['Add', 'Edit', 'Delete', 'Search','Sorting','Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
        'PreviousTimeSpan', 'NextTimeSpan','ColumnState']
    }
    undo(): void {
        this.ganttObj.undo();
    };
    redo(): void {
        this.ganttObj.redo();
    };
}



