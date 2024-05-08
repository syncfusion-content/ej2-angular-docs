import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false" [allowDelete]="true"
                [showRibbon]="false">
                <e-sheets>
                  <e-sheet name="Sheet1">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=90></e-column>
                      <e-column [width]=220></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=140></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                  <e-sheet name="Sheet2">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
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

    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        // deleting the rows from 8th to 10th index. To delete row, the third argument of enum type is passed as 'Row', the last argument specifies the sheet name or index in which the delete operation will perform. By default,active sheet will be considered. It is applicable only for model type Row and Column.
        this.spreadsheetObj!.delete(8, 10, 'Row', 0); // startIndex, endIndex, Row, sheet index
        // deleting the 2nd and 5th indexed columns
        this.spreadsheetObj!.delete(2, 2, 'Column', 'Sheet2');
        this.spreadsheetObj!.delete(5, 5, 'Column');
        this.spreadsheetObj!.delete(0, 0, "Sheet"); // delete the first sheet. sheet index starts from 0
        // Applies style formatting after deleted the rows and columns
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'A2:A8');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D2:G8');
    }
}


