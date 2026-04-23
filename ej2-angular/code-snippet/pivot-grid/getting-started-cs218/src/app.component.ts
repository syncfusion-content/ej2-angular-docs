import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView, VirtualScrollService, PDFExportService } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    providers: [VirtualScrollService, PDFExportService],
    template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowPdfExport='true' [exportAllPages]='false' enableVirtualization='true' [width]=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

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
            this.pivotGridObj?.pdfExport();
        };
    }
}

