

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" (excelExportComplete)='excelExportComplete()' allowExcelExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    public columns?: object[];
    @ViewChild('gantt', {static: true})
    public ganttObj?: GanttComponent| any;
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
        this.columns =  [
            { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText:  'Task Name', width: '150' },
            { field: 'StartDate', headerText:  'StartDate', width: '150', visible: false },
            { field: 'Duration', headerText:  'Duration', width: '150' },
            { field: 'Progress', headerText:  'Progress', width: '150' }
        ];
        this.toolbar =  ['ExcelExport','CsvExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_excelexport') {
                this.ganttObj.treeGrid.grid.columns[0].visible = true;
                this.ganttObj.treeGrid.grid.columns[3].visible = false;
                this.ganttObj.excelExport();
            } else if(args.item.id === 'ganttDefault_csvexport') {
                this.ganttObj.treeGrid.grid.columns[0].visible = true;
                this.ganttObj.treeGrid.grid.columns[3].visible = false;
                this.ganttObj.csvExport();
            }
    };
    public excelExportComplete(): void {
        this.ganttObj.treeGrid.grid.columns[0].visible = false;
        this.ganttObj.treeGrid.grid.columns[3].visible = true;
    };
}


