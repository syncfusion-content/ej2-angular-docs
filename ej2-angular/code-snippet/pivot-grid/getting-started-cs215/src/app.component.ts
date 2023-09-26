

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { Pivot_Data, base64AlgeriaFont } from './datasource';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

@Component({
  selector: 'app-container',
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowPdfExport='true' width=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})
export class AppComponent implements OnInit {
  public width?: string;
  public dataSourceSettings?: IDataOptions;
  public button?: Button;
  public pdfExportProperties?: PdfExportProperties;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            columns: [{ name: 'Year', caption: 'Production Year' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pdfExportProperties = {
               theme: { 
                header: {font:  new PdfTrueTypeFont(base64AlgeriaFont, 11) }, 
                caption: { font: new PdfTrueTypeFont(base64AlgeriaFont, 9) }, 
                record: { font: new PdfTrueTypeFont(base64AlgeriaFont, 10) } 
                } 
            };
            this.pivotGridObj?.pdfExport(this.pdfExportProperties);
        };
    }
}



