import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, SortService, ResizeService } from '@syncfusion/ej2-angular-gantt'
import { SelectionService, ContextMenuService, EditService } from '@syncfusion/ej2-angular-gantt'



import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ContextMenuClickEventArgs, ContextMenuOpenEventArgs } from '@syncfusion/ej2-angular-gantt';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #customcontextmenu id="ganttCustomContextmenu" height="430px" [dataSource]="data" [taskFields]="taskSettings" [enableContextMenu]="true" [contextMenuItems]="contextMenuItems" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings" (contextMenuClick)="contextMenuClick($event)" (contextMenuOpen)="contextMenuOpen($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
    public contextMenuItems?: (string | ContextMenuItemModel)[];
    @ViewChild('customcontextmenu', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1, TaskName: 'Project Initiation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentID: 1, Progress: 50 },
            {
                TaskID: 5, TaskName: 'Project Estimation', StartDate: new Date('04/02/2019'), EndDate: new Date('04/21/2019'),
            },
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, ParentID: 5, Progress: 50 },
            { TaskID: 9, TaskName: 'Sign Contract', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: '8', Progress: 30 },
            {
                TaskID: 10, TaskName: 'Project Approval and kick off', StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'), Duration: 0, Predecessor: '9'
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentID'
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



