import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { dataSource } from './datasource';

enableRipple(true);

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false"
                [showSheetTabs]="false">
                <e-sheets>
                  <!-- Hiding the headers and gridlines in 'Price Details' sheet -->
                  <e-sheet [showGridLines]="false" [showHeaders]="false">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=150></e-column>
                      <e-column [width]=110></e-column>
                      <e-column [width]=110></e-column>
                      <e-column [width]=85></e-column>
                      <e-column [width]=85></e-column>
                      <e-column [width]=85></e-column>
                      <e-column [width]=85></e-column>
                      <e-column [width]=85></e-column>
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
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // The gridlines have been removed to set border for the range of cells
        this.spreadsheetObj!.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
    }
}


