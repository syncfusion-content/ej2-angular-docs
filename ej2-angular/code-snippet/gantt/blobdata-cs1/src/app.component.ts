import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttAllModule, ToolbarItem, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ExcelExportCompleteArgs, PdfExportCompleteArgs } from '@syncfusion/ej2-angular-grids';
import { editingData } from './data';

@Component({
    imports: [GanttAllModule],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)"  (excelExportComplete)='excelExpComplete($event)' (pdfExportComplete)='pdfExpComplete($event)' allowPdfExport='true' allowExcelExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttChart?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];

    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
        };
        this.toolbar = ['PdfExport', 'ExcelExport'];
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            this.ganttChart!.pdfExport(undefined, undefined, undefined, true);
        }
        if (args.item.id === 'ganttDefault_excelexport') {
            this.ganttChart!.excelExport(undefined, undefined, undefined, true);
        }

    };

    public excelExpComplete(args: ExcelExportCompleteArgs) {
        // This event will be triggered when excel exporting.
        args.promise!.then((e: { blobData: Blob }) => {
            // In this `then` function, we can get blob data through the arguments after promise resolved.
            this.exportBlob(e.blobData);
        });
    }

    public pdfExpComplete(args: PdfExportCompleteArgs) {
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
        const url: string = (window.URL.createObjectURL(blob));
        a.href = url;
        a.download = 'Export';
        a.click();
        (window.URL.revokeObjectURL(url));
        document.body.removeChild(a);
    }
}