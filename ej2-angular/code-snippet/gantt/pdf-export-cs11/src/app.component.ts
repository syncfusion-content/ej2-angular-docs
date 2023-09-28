


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttComponent, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [columns]="columns" [toolbar]="toolbar" (pdfQueryTaskbarInfo)="pdfQueryTaskbarInfo($event)"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    @ViewChild('gantt', {static: true})
    public ganttChart?: GanttComponent;
    columns: ({ field: string; headerText: string; textAlign: string; width: string; visible?: undefined; } | { field: string; headerText: string; width: string; visible: boolean; textAlign?: undefined; } | { field: string; headerText: string; width: string; textAlign?: undefined; visible?: undefined; })[] | undefined;
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
        this.columns =  [
            { field: 'TaskID', headerText:  'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText:  'Task Name', width: '150', visible: false },
            { field: 'StartDate', headerText:  'StartDate', width: '150' },
            { field: 'Duration', headerText:  'Duration', width: '150' },
            { field: 'Progress', headerText:  'Progress', width: '150' }
        ];
        this.toolbar =  ['PdfExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            this.ganttChart!.pdfExport();
        }
};
    public pdfQueryTaskbarInfo(args : any): void {
    if(args.data.Progress < 50 && !args.data.hasChildRecords) {
        args.taskbar.progressColor = new PdfColor(205, 92, 92);
        args.taskbar.taskColor =  args.taskbar.taskBorderColor = new PdfColor(240, 128, 128);
    }
};
}



