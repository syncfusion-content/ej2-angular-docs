import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt'




import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { GanttComponent, ToolbarItem, PdfExportProperties } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { editingData } from './data';

@Component({
imports: [
         GanttModule
    ],

providers: [ToolbarService, PdfExportService, SelectionService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    @ViewChild('gantt', {static: true})
    public ganttChart?: GanttComponent;
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
                parentID:'ParentID',
        };
        this.toolbar =  ['PdfExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_pdfexport') {
                let exportProperties: PdfExportProperties = {
                    fitToWidthSettings: {       
                        isFitToWidth: true,       
                    }       
                };
                this.ganttChart!.pdfExport(exportProperties);
            }
    };
}



