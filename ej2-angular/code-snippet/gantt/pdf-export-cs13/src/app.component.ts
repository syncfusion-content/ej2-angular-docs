


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt, Toolbar, PdfExport, Selection, PdfExportProperties, PdfPaddings, GanttComponent, ToolbarItem, IGanttStyle } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';

import { editingData } from './data';


@Component({
    selector: 'app-root',
    template:
       `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar"
       (toolbarClick)="toolbarClick($event)" allowPdfExport='true' [treeColumnIndex]="1"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // Data for Gantt
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];
  @ViewChild('gantt', { static: true })
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
    this.toolbar = ['PdfExport'];
  };
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'ganttDefault_pdfexport') {
      let exportProperties: PdfExportProperties| IGanttStyle| any = {
        fontFamily: 'Arial',
        columnHeader: {
          backgroundColor: new PdfColor(179, 219, 255),
        },
        taskbar: {
          taskColor: new PdfColor(240, 128, 128),
          taskBorderColor: new PdfColor(255, 0, 0),
          progressColor: new PdfColor(205, 92, 92),
        },
        connectorLineColor: new PdfColor(128, 0, 0),
        footer: {
          backgroundColor: new PdfColor(205, 92, 92)
        },
        ganttStyle: {
          timeline: {
            backgroundColor: new PdfColor(179, 219, 255),
            padding: new PdfPaddings(5, 2, 0, 0),
          }
        },
        label: {
          fontColor: new PdfColor(128, 0, 0),
        },
        cell: {
          backgroundColor: new PdfColor(240, 248, 255),
          fontColor: new PdfColor(0, 0, 0),
          borderColor: new PdfColor(179, 219, 255),
        },
      }
      this.ganttObj!.pdfExport(exportProperties);

    }
  }
}
