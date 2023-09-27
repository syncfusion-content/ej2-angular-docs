


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';

import { GanttComponent, PdfExportProperties, ToolbarItem } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { editingData } from './data';

@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
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
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.toolbar =  ['PdfExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_pdfexport') {
                let exportProperties: PdfExportProperties = {
                  theme:"Fabric"
                };
                this.ganttObj!.pdfExport(exportProperties);
            }
    };
}



