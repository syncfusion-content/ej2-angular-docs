import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, RowModel } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false"
                [showSheetTabs]="false" [showRibbon]="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="B1"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=20></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=220></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=140></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    data: object[] = dataSource;
    // Rows model that is going to insert dynamically
    rowsModel: RowModel[] = [
        {
            index: 9, // Need to specify the index for the first row collection, the specified rows will be inserted in this index.
            cells: [{ value: '' }, { value: '8' }, { value: 'Northwoods Cranberry Sauce' }, { value: '3' }, { value: '12 - 12 oz jars' },
                { value: '40.00' }, { value: '6' }, { value: 'false' }]
        },
        {
            cells: [{ value: '' }, { value: '9' }, { value: 'Mishi Kobe Niku' }, { value: '4' }, { value: '18 - 500 g pkgs.' },
                { value: '97.00' }, { value: '29' }, { value: 'true' }]
        }
    ];

    created() {
        // Applies style formatting before inserting the rows
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'B1:H1');
        // inserting a empty row at 0th index
        this.spreadsheetObj!.insertRow();
        // inserting 2 rows at the 9th index with data
        this.spreadsheetObj!.insertRow(this.rowsModel);
        // Applies style formatting after the rows are inserted
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'B3:B12');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D3:D12');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'F3:H12');
    }
}


