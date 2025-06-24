import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties, ToolbarItem, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { editingData, image } from './data';


@Component({
imports: [
         GanttModule
    ],

providers: [ToolbarService, PdfExportService, SelectionService],
standalone: true,
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
    public ganttChart?: GanttComponent;
    public ngOnInit(): void {
        this.data = editingData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            parentID:'ParentID',
        };
        this.toolbar =  ['PdfExport'];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_pdfexport') {
                let exportProperties: PdfExportProperties = {
                    header: {
                        fromTop: 0,
                        height: 150,
                        contents: [
                            {
                                type: 'Text',
                                value: 'Welcome',
                                position: { x: 380, y: 0 },
                                style: { textBrushColor: '#C25050', fontSize: 25 },
                            },
                            {
                                type: 'Image',
                                src: image,
                                position: { x: 400, y: 70 },
                                size: { height: 50, width: 50 },
                            },
                        ]
                    },
                    footer: {
                        fromBottom: 160,
                        height: 100,
                        contents: [
                            {
                                type: 'Text',
                                value: 'Thank you!',
                                position: { x: 350, y: 40 },
                                style: { textBrushColor: '#C67878', fontSize: 14 }
                            },
                            {
                                type: 'PageNumber',
                                pageNumberType: 'Arabic',
                                format: 'Page {$current} of {$total}',
                                position: { x: 0, y: 25 },
                                size: { height: 50, width: 100 },
                                style: { textBrushColor: '#000000', hAlign: 'Center', vAlign: 'Bottom' }
                            }
                        ]
                    },
                };
                this.ganttChart!.pdfExport(exportProperties);
            }
    };
}



