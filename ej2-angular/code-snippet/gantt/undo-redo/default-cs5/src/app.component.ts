import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, SortService, RowDDService, FilterService, ResizeService, ReorderService, ToolbarService, EditService, UndoRedoService, ColumnMenuService } from '@syncfusion/ej2-angular-gantt'
import { ToolbarItem, EditSettingsModel, GanttAction, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { projectNewData } from './data';

@Component({
    imports: [GanttModule, ButtonModule],
    providers: [SortService, RowDDService, FilterService, ResizeService, ReorderService, ToolbarService, EditService, UndoRedoService, ColumnMenuService],
    standalone: true,
    selector: 'app-root',
    template:
        `<button ejs-button id='clearundocollection' style="margin-right: 8px;" (click)='clearundocollection()'>ClearUndoCollection</button>
       <button ejs-button id='clearredocollection' (click)='clearredocollection()'>ClearRedoCollection</button>
        <div style="margin-top: 16px;">
            <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [allowSorting]='true' [allowFiltering]='true' [toolbar]="toolbar" [enableUndoRedo]='true' [showColumnMenu]='true'
            [allowResizing]='true' [allowReordering]='true' [allowRowDragAndDrop]='true' [taskFields]="taskSettings" [undoRedoActions]="undoRedoActions" [editSettings] = "editSettings">
            </ejs-gantt>
        </div>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttInstance?: GanttComponent;
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
        this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent',
            'PrevTimeSpan', 'NextTimeSpan', 'Undo', 'Redo'],
        this.undoRedoActions = ['Add', 'Edit', 'Delete', 'Search', 'Sorting', 'Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'Indent', 'Outdent',
            'PreviousTimeSpan', 'NextTimeSpan', 'ColumnState']
    }

    public clearundocollection(): void {
        this.ganttInstance.clearUndoCollection();
    };

    public clearredocollection(): void {
        this.ganttInstance.clearRedoCollection();
    };
}



