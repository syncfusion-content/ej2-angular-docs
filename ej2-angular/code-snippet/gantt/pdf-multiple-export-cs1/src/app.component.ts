import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, ToolbarService, PdfExportService, SelectionService, GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt'
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData1, editingData2 } from './data';

@Component({
    imports: [GanttModule],
    providers: [ToolbarService, PdfExportService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template:
        `<p><b>First Gantt:</b></p>
       <ejs-gantt #gantt1 id="ganttDefault1" height="280px" [dataSource]="firstGanttData" [taskFields]="fTaskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>
       <p><b>Second Gantt:</b></p>
       <ejs-gantt #gantt2 id="ganttDefault2" height="250px" [dataSource]="secondGanttData" [taskFields]="sTaskSettings" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('gantt1', { static: true }) public firstGanttInstance?: GanttComponent;
    @ViewChild('gantt2', { static: true }) public secondGanttInstance?: GanttComponent;
    public firstGanttData?: object[];
    public secondGanttData?: object[];
    public fTaskSettings?: object;
    public sTaskSettings?: object;
    public toolbar?: ToolbarItem[];
    public projectStartDate?: Date;
    public projectEndDate?: Date;
   
    public ngOnInit(): void {
        this.firstGanttData = editingData1;
        this.secondGanttData = editingData2;
        this.fTaskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
        };
        this.sTaskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID: 'ParentID',
        };
        this.toolbar = ['PdfExport'];
        this.projectStartDate = new Date('03/31/2019');
        this.projectEndDate = new Date('04/14/2019');
    }

    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault1_pdfexport') {
            const firstGanttExport: Promise<any> = this.firstGanttInstance!.pdfExport({}, true);
            firstGanttExport.then((firstGanttData: any) => {
                this.secondGanttInstance?.pdfExport({}, false, firstGanttData);
            });
        }
    };
}