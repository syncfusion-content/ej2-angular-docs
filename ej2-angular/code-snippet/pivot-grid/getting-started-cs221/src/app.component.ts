

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, VirtualScrollService, ExportCompleteEventArgs, PDFExportService } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [VirtualScrollService, PDFExportService],
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowPdfExport='true' enableVirtualization='true' (exportComplete)='exportComplete($event)' width=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public button?: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    exportComplete(args: ExportCompleteEventArgs | any): void {
        args.promise.then((e: { blobData: Blob }) => {
            console.log(e.blobData);
        });
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            values: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            let pdfExportProperties: PdfExportProperties = { };
            this.pivotGridObj?.pdfExport(pdfExportProperties, false, undefined, true);
        };
    }
}



