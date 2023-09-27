

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ContextMenuClickEventArgs, ContextMenuOpenEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { editingData} from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #customcontextmenu id="ganttCustomContextmenu" height="430px" [dataSource]="editingData" [taskFields]="taskSettings" [enableContextMenu]="true" [contextMenuItems]="contextMenuItems" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings" (contextMenuClick)="contextMenuClick($event)" (contextMenuOpen)="contextMenuOpen($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    // Data for Gantt
    public editingData?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public contextMenuItems?: (string | ContextMenuItemModel)[];
    @ViewChild('customcontextmenu', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.editingData = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
       };
       this.contextMenuItems = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' } as ContextMenuItemModel,
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' } as ContextMenuItemModel,
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' } as ContextMenuItemModel
        ];
    }

    public contextMenuClick (args: ContextMenuClickEventArgs) {
        let record = args.rowData;
        if (args.item.id === 'collapserow') {
            this.ganttObj.collapseByID(Number(record!.ganttProperties!.taskId));
            }
        if (args.item.id === 'expandrow') {
            this.ganttObj.expandByID(Number(record!.ganttProperties!.taskId));
            }
        if (args.item.id === 'hidecols') {
            this.ganttObj.hideColumn(args.column!.headerText);
        }
    }
    public contextMenuOpen (args: ContextMenuOpenEventArgs) {
        let record = args.rowData;
            if (args.type !== 'Header') {
                if (!record!.hasChildRecords) {
                    args.hideItems!.push('Collapse the Row');
                    args.hideItems!.push('Expand the Row');
                } else {
                    if(record!.expanded){
                        args.hideItems!.push("Expand the Row");
                    } else {
                        args.hideItems!.push("Collapse the Row");
                    }
                }
        }
    }
}



