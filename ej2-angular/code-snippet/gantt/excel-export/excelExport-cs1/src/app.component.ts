

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowExcelExport='true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent;
    public ngOnInit(): void {
        this.data = GanttData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.toolbar =  ['ExcelExport','CsvExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_excelexport') {
                this.ganttObj!.excelExport();
            } else if(args.item.id === 'ganttDefault_csvexport') {
                this.ganttObj!.csvExport();
            }
    };
}


