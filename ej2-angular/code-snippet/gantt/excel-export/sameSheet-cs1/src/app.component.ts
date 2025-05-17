import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt'

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ExcelExport, GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
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
       `<p><b>First Gantt:</b></p>
       <ejs-gantt #gantt1 id="ganttDefault1" height="280px" [dataSource]="fData" [taskFields]="fTaskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowExcelExport='true' [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>
       <p><b>Second Gantt:</b></p>
       <ejs-gantt #gantt2 id="ganttDefault2" height="250px" [dataSource]="sData" [taskFields]="sTaskSettings" allowExcelExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public fData?: object[];
    public sData?: object[];
    public fTaskSettings?: object;
    public sTaskSettings?: object;
    public toolbar?: ToolbarItem[];
    public projectStartDate?: Date;
    public projectEndDate?: Date;
    @ViewChild('gantt1', {static: true}) public fGantt?: GanttComponent;
    @ViewChild('gantt2', {static: true}) public sGantt?: GanttComponent;
    public ngOnInit(): void {
        this.fData = GanttData.slice(0,4);
        this.sData = GanttData.slice(4,8);
        this.fTaskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID:'ParentID',
        };
        this.sTaskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID:'ParentID',
        };
        this.toolbar =  ['ExcelExport'];
        this.projectStartDate = new Date('03/31/2019');
        this.projectEndDate = new Date('04/14/2019');
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault1_excelexport') {
                const appendExcelExportProperties: ExcelExportProperties = {
                multipleExport: { type: 'AppendToSheet', blankRows: 2 }
            };

            const firstGanttExport: Promise<any> = this.fGantt!.excelExport(appendExcelExportProperties, true);
            firstGanttExport.then((fData: any) => {
                this.sGantt!.excelExport(appendExcelExportProperties, false, fData);
            });
            }
    };
}


