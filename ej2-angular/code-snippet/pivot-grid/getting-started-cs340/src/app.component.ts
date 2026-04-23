import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, PDFExportService, PdfExportProperties } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivotData } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Observable } from 'rxjs';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div class="col-md-8">
                <ejs-pivotview #pivotview id='PivotTable' height='350' [dataSourceSettings]=dataSourceSettings 
                    allowPdfExport='true' [width]=width [gridSettings]='gridSettings'></ejs-pivotview>
            </div>
            <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [PDFExportService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public button?: Button;
    public dataSourceSettings?: DataSourceSettingsModel;
    public gridSettings?: GridSettings;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: pivotData as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
        };

        this.gridSettings = {
            columnWidth: 140,
        } as GridSettings;

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            let pdfExportProperties: PdfExportProperties = {
                allowHorizontalOverflow: true
            };
            this.pivotGridObj?.pdfExport(pdfExportProperties);
        };
    }
}
