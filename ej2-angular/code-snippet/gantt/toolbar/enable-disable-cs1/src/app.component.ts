


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<button ejs-button id='enabletoolbar' (click)='enable()'>Enable</button>
       <button ejs-button id='disabletoolbar' (click)='disable()'>Disable</button>
       <br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" [allowFiltering]='true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: any;
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
    public ngOnInit(): void {
        this.data = editingData;
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
        this.toolbar =  [{ text: 'QuickFilter', id: 'QuickFilter'  }, { text: 'ClearFilter', id: 'ClearFilter'}];
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.text === 'QuickFilter') {
            this.ganttObj.filterByColumn('TaskName', 'startswith', 'Identify');
            }
        if (args.item.text === 'ClearFilter') {
            this.ganttObj.clearFiltering();
            }
        };
    enable(): void {
        this.ganttObj.toolbarModule.enableItems(['QuickFilter', 'ClearFilter'], true);// enable toolbar items.
        }
        disable(): void {
            this.ganttObj.toolbarModule.enableItems(['QuickFilter', 'ClearFilter'], false);// disable toolbar items.
            }
}



