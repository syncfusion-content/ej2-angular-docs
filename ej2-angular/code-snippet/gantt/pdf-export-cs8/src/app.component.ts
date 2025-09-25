import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { editingData } from './data';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, PdfExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" (beforePdfExport)="beforePdfExport()"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: string[];
    @ViewChild('gantt', { static: true })
    public ganttObj?: GanttComponent;
    columns: ({ field: string; headerText: string; textAlign: string; width: string; visible?: undefined; } | { field: string; headerText: string; width: string; textAlign?: undefined; visible?: undefined; } | { field: string; headerText: string; width: string; visible: boolean; textAlign?: undefined; })[] | undefined;
    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentId',
        };
        this.columns = [
            { field: 'TaskId', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '150' },
            { field: 'StartDate', headerText: 'StartDate', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150', visible: false },
            { field: 'Progress', headerText: 'Progress', width: '150' }
        ];
        this.toolbar = ['PdfExport'];
    }
    public toolbarClick(args: any): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            (this.ganttObj as any).pdfExport();
        }
    };
    public beforePdfExport(): void {
        ((this.ganttObj as any).treeGrid.columns[2] as any).visible = false;
        ((this.ganttObj as any).treeGrid.columns[3] as any).visible = true;
    };
}