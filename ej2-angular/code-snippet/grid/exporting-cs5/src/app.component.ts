import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, PdfExportService, PageService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
  GridComponent,
  ToolbarItems,
  PdfExportProperties,
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { image } from './image';

@Component({
imports: [
        
        GridModule
    ],

providers: [PdfExportService, ToolbarService, PageService],
standalone: true,
  selector: 'app-root',
  template: `<ejs-grid #grid id='Grid' [dataSource]='data' [allowPaging]='true' [toolbar]='toolbarOptions' 
              height='220px'  [allowPaging]='true' [allowPdfExport]='true' (toolbarClick)='toolbarClick($event)' >
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=110></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
            </ejs-grid>`,
})
export class AppComponent implements OnInit {
  public data?: object[];
  public toolbarOptions?: ToolbarItems[];
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.toolbarOptions = ['PdfExport'];
  }

  toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_pdfexport') {
      // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const pdfExportProperties: PdfExportProperties = {
        header: {
          fromTop: 0,
          height: 130,
          contents: [
            {
              type: 'Line',
              style: { penColor: '#000080', penSize: 2, dashStyle: 'Solid' },
              points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
            {
              type: 'Text',
              value: 'Exported Document Of Customers',
              position: { x:200, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 20 },
            },
            {
              type: 'Image',
              src: image,
              position: { x: 40, y: 10 },
              size: { height: 100, width: 150 },
            },
          ],
        },
        footer: {
          fromBottom: 10,
          height: 60,
          contents: [
            {
              type: 'PageNumber',
              pageNumberType: 'Arabic',
              format: 'Page {$current} of {$total}', //optional
              position: { x: 0, y: 25 },
              style: {
                textBrushColor: '#4169e1',
                fontSize: 15,
                hAlign: 'Center',
              },
            },
            {
              type: 'Line',
              style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
              points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            },
          ],
        },
      };
      (this.grid as GridComponent).pdfExport(pdfExportProperties);
    }
  }
}
