


import { Component, ViewEncapsulation, OnInit, ViewChild} from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ToolbarItem, ZoomTimelineSettings, EditSettingsModel  } from '@syncfusion/ej2-angular-gantt';
import { projectNewData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"[toolbar]="toolbar" [editSettings]="editSettings" (actionComplete)="actionComplete($event)" (taskbarEdited)="taskbarEdited($event)"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    public editSettings?: EditSettingsModel;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
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
            allowEditing: true,
            allowTaskbarEditing: true,
        };
        this.toolbar =  ['Edit','ZoomToFit'];
    }
    public actionComplete(args: any) {
      if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
        this.ganttObj.dataSource = projectNewData;
        this.ganttObj.fitToProject();
      }
    };
    public taskbarEdited(args: any) {
      if (args) {
        this.ganttObj.dataSource = projectNewData;
        this.ganttObj.fitToProject();
      }
    };
}



