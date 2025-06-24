import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { ToolbarService, PdfExportService, SelectionService, EditService } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttComponent, ToolbarItem, SelectionSettingsModel, EditSettingsModel } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { ganttData } from './data';

@Component({
imports: [
     GanttModule
    ],

providers: [ToolbarService, PdfExportService, SelectionService, EditService],
standalone: true,
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="450px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" (queryTaskbarInfo)="queryTaskbarInfo($event)" (pdfQueryTaskbarInfo)="pdfQueryTaskbarInfo($event)" [editSettings] = "editSettings" [columns]="columns" [gridLines]="gridLines" allowPdfExport='true'></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data?: object[];
    public taskSettings?: object;
    public toolbar?: ToolbarItem[];
    @ViewChild('gantt', {static: true})
    public ganttChart?: GanttComponent;
    public editSettings?: EditSettingsModel;
    public columns?: object[];
    public gridLines?: string;
    public ngOnInit(): void {
        this.data = ganttData;
        this.taskSettings = {
            id: "TaskID",
            name: "TaskName",
            startDate: "StartDate",
            endDate: "EndDate",
            duration: "Duration",
            progress: "Progress",
            parentID:'ParentID',
            segments: "Segments"
        };
        this.editSettings = {
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        this.toolbar =  ['PdfExport'];
        this.gridLines = 'Both';
        this.columns =  [
            { field: 'TaskID', headerText: 'Task ID' },
            { field: 'TaskName', headerText: 'Task Name' },
            { field: 'StartDate', headerText: 'StartDate' },
            { field: 'EndDate', headerText: 'End Date'}
        ];
    }
    public toolbarClick(args: ClickEventArgs): void {
            if (args.item.id === 'ganttDefault_pdfexport') {
                this.ganttChart!.pdfExport();
            }
    };
    public queryTaskbarInfo(args: any) {
        if (args.data.taskData.Segments) {
            const segmentIndex = args.taskbarElement.dataset.segmentIndex;
            if (Number(segmentIndex) === 1) {
                args.taskbarBgColor = 'red';
                args.taskbarBorderColor = 'black';
                args.progressBarBgColor = "green";
            }
        }
    };
    public pdfQueryTaskbarInfo(args : any): void {
        if (args.taskbar.taskSegmentStyles) {
            args.taskbar.taskSegmentStyles[1].taskColor = new PdfColor(255, 0, 0);
            args.taskbar.taskSegmentStyles[1].progressColor = new PdfColor(0, 128, 0);
            args.taskbar.taskSegmentStyles[1].taskBorderColor = new PdfColor(0, 0, 0);
        }
    };
}
