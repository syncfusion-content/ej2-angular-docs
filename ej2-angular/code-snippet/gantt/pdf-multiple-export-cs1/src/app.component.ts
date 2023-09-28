


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<p><b>First Gantt:</b></p>
       <ejs-gantt #gantt1 id="ganttDefault1" height="280px" [dataSource]="fData" [taskFields]="fTaskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1" [projectStartDate]="projectStartDate" [projectEndDate]="projectEndDate"></ejs-gantt>
       <p><b>Second Gantt:</b></p>
       <ejs-gantt #gantt2 id="ganttDefault2" height="250px" [dataSource]="sData" [taskFields]="sTaskSettings" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
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
        this.fData = [editingData[0]];
        this.sData = [editingData[1]];
        this.fTaskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.sTaskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.toolbar =  ['PdfExport'];
        this.projectStartDate = new Date('03/31/2019');
        this.projectEndDate = new Date('04/14/2019');
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault1_pdfexport') {
            const firstGanttExport: Promise<any> = this.fGantt!.pdfExport({}, true);
            firstGanttExport.then((fData: any) => {
                this.sGantt?.pdfExport({}, false, fData);
            });
            }
    };
}



