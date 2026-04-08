import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview'
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PivotView, VirtualScrollService, PDFExportService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { Pivot_Data } from './datasource';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
import { Observable } from 'rxjs';

@Component({
    imports: [
        PivotViewAllModule,
        PivotFieldListAllModule
    ],
    standalone: true,
    selector: 'app-container',
    providers: [PDFExportService, VirtualScrollService],
    template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowPdfExport='true'
  enableVirtualization='true' [width]=width [gridSettings]='gridSettings'></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;
    public button?: Button;
    public gridSettings?: GridSettings;
    public observable = new Observable();

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
        };

        this.gridSettings = {
            columnWidth: 140,
            pdfHeaderQueryCellInfo: this.observable.subscribe((args: any) => {
                if (args.gridCell && args.gridCell.valueSort && args.gridCell.valueSort.levelName === 'FY 2015.Units Sold'
                    && args.cell && args.cell.row && args.cell.row.pdfGrid && args.cell.row.pdfGrid.gridColumns
                    && args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex]) {
                    args.cell.row.pdfGrid.gridColumns.columns[args.gridCell.colIndex].width = 250;
                }
            }) as any,
        } as GridSettings;

        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.pdfExport();
        };
    }
}
