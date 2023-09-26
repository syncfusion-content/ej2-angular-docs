

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { ExcelExportProperties } from '@syncfusion/ej2-grids';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  template: `<div class="col-md-8">
  <ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings allowExcelExport='true' width=width></ejs-pivotview>
  <ejs-pivotview #pivotview1 id='PivotView1' height='350' [dataSourceSettings]=dataSourceSettings1 allowExcelExport='true' width=width></ejs-pivotview></div>
  <div class="col-md-2"><button ej-button id='export'>Export</button></div>`
})
export class AppComponent implements OnInit {
  public width?: string;
  public dataSourceSettings?: IDataOptions;
  public dataSourceSettings1?: IDataOptions;
  public button?: Button;
  public excelExportProperties?: ExcelExportProperties;
  public firstGridExport?: Promise<any>;

    @ViewChild('pivotview', {static: false})
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
            filters: [],
            valueSortSettings: { headerText: 'FY 2015##Q1##Amount', headerDelimiter: '##', sortOrder: 'Descending' }
        };

        this.dataSourceSettings1 = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            valueSortSettings: { headerText: 'FY 2015##Q1##Amount', headerDelimiter: '##', sortOrder: 'Descending' }
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.excelExportProperties = {
                multipleExport: { type: 'AppendToSheet', blankRows: 2 }
            };
            this.firstGridExport = this.pivotGridObj?.grid.excelExport(this.excelExportProperties, true);
            this.firstGridExport?.then((fData: any) => {
                this.pivotGridObj1!.excelExport(this.excelExportProperties, false, fData);
            });
        };
    }
}



