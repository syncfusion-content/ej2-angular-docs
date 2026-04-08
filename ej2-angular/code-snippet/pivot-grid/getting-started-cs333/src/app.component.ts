import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, PDFExportService, PdfExportProperties } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { salesData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    providers: [PDFExportService],
    standalone: true,
    selector: 'app-container',
    styleUrls: ['./app.component.css'],
    template: `<div class="col-md-8">
  <div id='PivotTable1Container' class='pivot-container'>
    <ejs-pivotview #PivotTable1 id='PivotTable1' height='350' [dataSourceSettings]=dataSourceSettings allowPdfExport='true' [width]=width></ejs-pivotview>
  </div>
  <div id='PivotTable2Container' class='pivot-container'>
    <ejs-pivotview #PivotTable2 id='PivotTable2' [dataSourceSettings]=dataSourceSettings1 allowPdfExport='true' [width]=width></ejs-pivotview>
  </div>
</div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})

export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;
    public dataSourceSettings1?: DataSourceSettingsModel;
    public button?: Button;

    @ViewChild('PivotTable1', { static: false })
    public pivotGridObj?: PivotView;

    @ViewChild('PivotTable2')
    public pivotGridObj1?: PivotView;

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: salesData as IDataSet[],
            expandAll: false,
            rows: [{ name: 'Region', caption: 'Region' }],
            columns: [{ name: 'Product', caption: 'Product' }],
            values: [
                { name: 'Sales', caption: 'Q4 Sales' },
                { name: 'ProfitMargin', caption: 'Profit Margin' }
            ],
            formatSettings: [
                { name: 'Sales', format: 'C0' },
                { name: 'ProfitMargin', format: '0\'%\'' }
            ],
            filterSettings: [{ name: 'Product', items: ['Laptop'], type: 'Include' }]
        };

        this.dataSourceSettings1 = {
            dataSource: salesData as IDataSet[],
            expandAll: false,
            rows: [{ name: 'Region', caption: 'Region' }],
            columns: [{ name: 'Product', caption: 'Product' }],
            values: [
                { name: 'Units', caption: 'Units Sold' },
                { name: 'Sales', caption: 'Q4 Sales' }
            ],
            formatSettings: [
                { name: 'ProfitMargin', format: '0\'%\'' },
                { name: 'Sales', format: 'C0' }
            ],
            filterSettings: [{ name: 'Product', items: ['Smartphone'], type: 'Include' }]
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            const pdfExportProperties: PdfExportProperties = {
                multipleExport: { type: 'NewPage' },
                pivotTableIds: ['PivotTable1', 'PivotTable2']
            };
            this.pivotGridObj1?.pdfExport(pdfExportProperties, true);
        };
    }
}
