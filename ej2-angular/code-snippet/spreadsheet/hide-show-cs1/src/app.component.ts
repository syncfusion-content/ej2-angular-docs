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
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false"
                [showSheetTabs]="false" [showRibbon]="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=150></e-column>
                      <!-- Hiding the 1st and 2nd column index through property binding -->
                      <e-column [width]=100 [hidden]="true"></e-column>
                      <e-column [width]=100 [hidden]="true"></e-column>
                      <e-column [width]=80></e-column>
                      <e-column [width]=80></e-column>
                      <e-column [width]=80></e-column>
                      <e-column [width]=80></e-column>
                      <e-column [width]=80></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [index]=2 [hidden]="true"></e-row>
                      <e-row [hidden]="true"></e-row>
                    </e-rows>
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
        // Unhide the 2nd index hidden column
        this.spreadsheetObj!.hideColumn(1, 1, false);
        // Unhide the 3rd index hidden row
        this.spreadsheetObj!.hideRow(3, 3, false);
        // Hiding the 6th index column
        this.spreadsheetObj!.hideColumn(6);
        // Hiding the 8th and 9th index row
        this.spreadsheetObj!.hideRow(8, 9);
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D2:H11');
    }
}


