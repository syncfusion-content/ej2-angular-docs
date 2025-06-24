import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent, ToolbarItem,ExcelExport } from '@syncfusion/ej2-angular-gantt';
import { ExcelExportProperties } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './data';

@Component({
imports: [
         GanttAllModule
    ],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowExcelExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
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
            parentID:'ParentID',
        };
        this.toolbar =  ['ExcelExport','CsvExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_excelexport') {
                let excelExportProperties: ExcelExport| any = {
                   fileName:"Gantt.xlsx"
                };
                this.ganttObj!.excelExport(excelExportProperties);
            } else if (args.item.id === 'ganttDefault_csvexport'){
                let excelExportProperties: ExcelExportProperties = {
                   fileName:"Gantt.csv"
                };
                this.ganttObj!.csvExport(excelExportProperties);
            }
    };
}


