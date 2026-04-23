import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, PDFExportService } from '@syncfusion/ej2-angular-pivotview'
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
    public observable = new Observable();

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: pivotData as IDataSet[],
            expandAll: true,
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Date', showNoDataItems: true }],
            values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country', showNoDataItems: true }, { name: 'State', showNoDataItems: true }],
            filters: [],
            emptyCellsTextContent: '**'
        };

        this.gridSettings = {
            columnWidth: 140,
            queryCellInfo: this.observable.subscribe((args: any) => {
                const colIndex = Number(args.cell.getAttribute('aria-colindex'));
                const currentCell = args.data[colIndex - 1];
                if (currentCell.formattedText === '**' &&
                    currentCell.actualText === 'Quantity' &&
                    ['Canada.New Mexico', 'United States.British Columbia'].includes(currentCell.rowHeaders)) {
                    args.rowSpan = 2;
                    args.colSpan = 2;
                }
            }) as any,
            pdfQueryCellInfo: this.observable.subscribe((args: any) => {
                if (args.value === '**' &&
                    args.data.actualText === 'Quantity' &&
                    ['Canada.New Mexico', 'United States.British Columbia'].includes(args.data.rowHeaders)) {
                    args.cell.rowSpan = 2;
                    args.cell.colSpan = 2;
                }
            }) as any,
        } as GridSettings;

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.pdfExport();
        };
    }
}
