import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { GanttModule, ToolbarService, DayMarkersService, PdfExportService, SelectionService PdfExportProperties, PdfBorders, PdfPaddings, GanttComponent, ToolbarItem, IGanttStyle } from '@syncfusion/ej2-angular-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { PdfColor, PdfDashStyle, PdfFontFamily, PdfFontStyle, PdfPen, PdfStringFormat, PdfTextAlignment } from '@syncfusion/ej2-pdf-export';
import { editingData } from './data';

@Component({
  imports: [GanttModule],
  providers: [ToolbarService, PdfExportService, SelectionService, DayMarkersService],
  standalone: true,
  selector: "app-root",
  template: `<ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)"
    allowPdfExport="true" [treeColumnIndex]="1" [eventMarkers]="eventMarkers" [holidays]="holidays"></ejs-gantt>`,
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  @ViewChild("gantt", { static: true }) public ganttInstance?: GanttComponent;
  public data?: object[];
  public taskSettings?: object;
  public toolbar?: ToolbarItem[];
  public eventMarkers?: object[];
  public holidays?: object[];

  public ngOnInit(): void {
    this.data = editingData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      dependency: 'Predecessor',
      progress: 'Progress',
      parentID: 'ParentID',
    };
    this.eventMarkers = [
      {
        day: '04/10/2019',
        cssClass: 'e-custom-event-marker',
        label: 'Project approval and kick-off'
      }
    ];
    this.holidays = [{
      from: "04/04/2019",
      to: "04/04/2019",
      label: " Public holidays",
      cssClass: "e-custom-holiday"

    },
    {
      from: "04/12/2019",
      to: "04/12/2019",
      label: " Public holiday",
      cssClass: "e-custom-holiday"

    }];
    this.toolbar = ["PdfExport"];
  }

  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === "ganttDefault_pdfexport") {
      const stringFormat = new PdfStringFormat();
      stringFormat.alignment = PdfTextAlignment.Center;
      const vertical = new PdfStringFormat();
      vertical.alignment = PdfTextAlignment.Center;
      const penColor = new PdfColor(105, 105, 105);
      const penWidth = 1;
      const pen = new PdfPen(penColor, penWidth);
      pen.dashStyle = PdfDashStyle.Dash;
      const borderWidth = 1;
      const borderColor = new PdfColor(192, 192, 192);
      let pdfpen: PdfPen = new PdfPen(borderColor, borderWidth);
      let pdfborders: PdfBorders = new PdfBorders();
      pdfborders.all = pdfpen;
      let exportProperties: PdfExportProperties = {
        ganttStyle: {
          connectorLineColor: new PdfColor(128, 0, 0),
          taskbar: {
            taskColor: new PdfColor(240, 128, 128),
            taskBorderColor: new PdfColor(255, 0, 0),
            progressColor: new PdfColor(205, 92, 92),
          },
          columnHeader: {
            backgroundColor: new PdfColor(179, 219, 255),
          },
          timeline: {
            backgroundColor: new PdfColor(179, 219, 255),
            padding: new PdfPaddings(5, 2, 0, 0),
          },
          footer: {
            backgroundColor: new PdfColor(205, 92, 92),
          },
          label: {
            fontColor: new PdfColor(128, 0, 0),
          },
          cell: {
            backgroundColor: new PdfColor(240, 248, 255),
            fontColor: new PdfColor(0, 0, 0),
            borderColor: new PdfColor(179, 219, 255),
          },
          fontFamily: 1,
          eventMarker: {
            label: {
              backgroundColor: new PdfColor(255, 239, 213),
              fontFamily: PdfFontFamily.TimesRoman,
              fontColor: new PdfColor(139, 69, 19),
              fontSize: 9,
              format: stringFormat,
              fontStyle: PdfFontStyle.Bold,
              borderColor: new PdfColor(160, 82, 45),
              borders: pdfborders,
            },
            lineStyle: pen,
          },
          holiday: {
            fontFamily: PdfFontFamily.TimesRoman,
            fontSize: 10,
            fontStyle: PdfFontStyle.Bold,
            borderColor: new PdfColor(211, 211, 211),
            backgroundColor: new PdfColor(255, 248, 220),
            fontColor: new PdfColor(105, 105, 105),
            format: vertical,
            borders: pdfborders,
          },
        },
      };
      this.ganttInstance!.pdfExport(exportProperties);
    }
  }
}