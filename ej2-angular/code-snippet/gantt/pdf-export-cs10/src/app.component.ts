import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, ToolbarService, PdfExportService, ToolbarItem, GanttComponent, SelectionService, PdfQueryTimelineCellInfoEventArgs, PdfGanttCellStyle } from '@syncfusion/ej2-angular-gantt'
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { editingData } from './data';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, PdfExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" (pdfQueryTimelineCellInfo)="pdfQueryTimelineCellInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt', { static: true }) public ganttChart?: GanttComponent;
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    public columns?: object[];

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
        this.columns = [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150', visible: false },
            { field: 'StartDate', headerText: 'StartDate', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ];
        this.toolbar = ['PdfExport'];
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            this.ganttChart!.pdfExport();
        }
    };

    public pdfQueryTimelineCellInfo(args: PdfQueryTimelineCellInfoEventArgs): void {
        (args.timelineCell as PdfGanttCellStyle).backgroundColor = new PdfColor(240, 248, 255);
    };
}