import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { SortService, FilterService, ColumnMenuService } from '@syncfusion/ej2-angular-gantt'


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { projectNewData } from './data';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';

@Component({
imports: [
         GanttModule
    ],

providers: [SortService, FilterService, ColumnMenuService],
standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt id="ganttDefault" #gantt height="430px" [dataSource]="data"  [taskFields]="taskSettings"  [allowFiltering] = 'true' [treeColumnIndex]='1'
        [allowResizing] = 'true' [showColumnMenu] = 'true' [allowSorting] = 'true' [splitterSettings]="splitterSettings" [sortSettings]='sortSettings'
       [columnMenuItems]='columnMenuItems' (columnMenuClick)='columnMenuClick($event)'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=120 ></e-column>
            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=290></e-column>
            <e-column field='StartDate' headerText='Start Date' textAlign='Right' width=150 ></e-column>
            <e-column field='Duration' headerText='Duration' textAlign='Right' width=150 ></e-column>
            <e-column field='Progress' headerText='Progress' textAlign='Right' width=150></e-column>
        </e-columns>
       </ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // Data for Gantt
    @ViewChild('gantt')
    public gantt?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public splitterSettings?: object;
    public columnMenuItems: any = [{ text: 'Clear Sorting', id: 'ganttclearsorting' }];
    public sortSettings: any = { columns: [{ direction: 'Descending', field: 'TaskID' }] };
    public columnMenuClick(args: MenuEventArgs) {
        if (args.item.id === 'ganttclearsorting') {
            this.gantt!.clearSorting();
        }
    }
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.splitterSettings = {
            position: '75%'
        };
    }
}



