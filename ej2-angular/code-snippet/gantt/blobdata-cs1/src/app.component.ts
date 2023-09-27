


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { Gantt, Toolbar, PdfExport, Selection,  ExcelExportService, PdfExportService,
   ToolbarService, ToolbarItem, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { ExcelExportCompleteArgs, PdfExportCompleteArgs, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)"  (excelExportComplete)='excelExpComplete($event)' (pdfExportComplete)='pdfExpComplete($event)' allowPdfExport='true' allowExcelExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, ExcelExportService, PdfExportService]
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
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.toolbar =  ['PdfExport','ExcelExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_pdfexport') {
                this.ganttChart!.pdfExport(undefined,undefined,undefined,true);
            }
            if (args.item.id === 'ganttDefault_excelexport') {
                this.ganttChart!.excelExport(undefined,undefined,undefined,true);
            }

    };
    excelExpComplete(args: ExcelExportCompleteArgs) {
        // This event will be triggered when excel exporting.
        args.promise!.then((e: { blobData: Blob }) => {
            // In this `then` function, we can get blob data through the arguments after promise resolved.
            this.exportBlob(e.blobData);
        });
    }

    pdfExpComplete(args: PdfExportCompleteArgs) {
        // This event will be triggered when pdf exporting.
        args.promise!.then((e: { blobData: Blob }) => {
            // In this `then` function, we can get blob data through the arguments after promise resolved.
            this.exportBlob(e.blobData);
        });
    }
    public exportBlob = (blob: Blob) => {
        const a: HTMLAnchorElement = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        const url: string = (window.URL as any).createobjectURL(blob);
        a.href = url;
        a.download = 'Export';
        a.click();
        (window.URL as any).revokeobjectURL(url);
        document.body.removeChild(a);
    }
}



