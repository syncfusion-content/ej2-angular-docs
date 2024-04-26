import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellModel, getCellAddress } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false" [showSheetTabs]="false"
                [showRibbon]="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="A2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=90></e-column>
                      <e-column [width]=220></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=140></e-column>
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
    // Cells model that you are going to update in the inserted 5th column dynamically
    cellsModel: CellModel[] = [{ value: 'Unit Price', style: { fontWeight: 'bold', textAlign: 'center' } }, { value: '18.00' },
        { value: '19.00' }, { value: '10.00' }, { value: '22.00' }, { value: '21.35' }, { value: '25.00' }, { value: '30.00' },
        { value: '21.00' }, { value: '40.00' }, { value: '97.00' }];

    created() {
        // Applies style formatting before inserting the column
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:G2');
        // inserting a empty column at 0th index
        this.spreadsheetObj!.insertColumn();
        // inserting 1 column at the 5th index with column model
        this.spreadsheetObj!.insertColumn([{ index: 5, width: 90 }]);
        let rowIndex = 1;
        // Updating the 5th column data
        this.cellsModel.forEach((cell: CellModel): void => {
            this.spreadsheetObj!.updateCell(cell, getCellAddress(rowIndex, 5)); rowIndex++;
        });
        // Applies style formatting after the columns are inserted
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'B3:B12');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D3:D12');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'F3:H12');
    }
}


