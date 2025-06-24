import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService } from '@syncfusion/ej2-angular-gantt'
import { SelectionService } from '@syncfusion/ej2-angular-gantt'



import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
imports: [
         GanttModule
    ],

providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt id="ganttContextmenu" height="430px" [dataSource]="data" [taskFields]="taskSettings" [enableContextMenu]="true" [allowSorting]="true" [allowResizing]="true" [editSettings]="editSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public editSettings?: object;
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
    }
}



