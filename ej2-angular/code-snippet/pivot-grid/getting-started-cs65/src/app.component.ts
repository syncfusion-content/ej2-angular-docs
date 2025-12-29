import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PivotViewAllModule, PivotFieldListAllModule, ExcelExportService, ExcelExportProperties } from '@syncfusion/ej2-angular-pivotview'
import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
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
    template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotTable1' height='350' [dataSourceSettings]=dataSourceSettings allowExcelExport='true' [width]=width></ejs-pivotview>
  <br />
  <ejs-pivotview #pivotview1 id='PivotTable2' height='350' [dataSourceSettings]=dataSourceSettings1 allowExcelExport='true' [width]=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`,
    providers: [ExcelExportService],
})
export class AppComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: DataSourceSettingsModel;
    public dataSourceSettings1?: DataSourceSettingsModel;
    public button?: Button;
    public excelExportProperties?: ExcelExportProperties;
    public firstGridExport?: Promise<any>;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj?: PivotView;

    @ViewChild('pivotview1')
    public pivotGridObj1?: PivotView;

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

        this.dataSourceSettings1 = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            rows: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
            columns: [{ name: 'Country' }, { name: 'Products' }],
            filters: []
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.excelExportProperties = {
                multipleExport: { type: 'NewSheet' },
                pivotTableIds: ['PivotTable1', 'PivotTable2']
            };
            this.pivotGridObj?.excelExport(this.excelExportProperties, true);
        };
    }
}
