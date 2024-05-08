import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { dataSource1, dataSource2 } from './datasource';

enableRipple(true);

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false">
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range [dataSource]="priceData"></e-range>
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
                  <e-sheet name="Budget Details">
                    <e-ranges>
                      <e-range [dataSource]="budgetData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
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

    priceData: object[] = dataSource1;

    budgetData: object[] = dataSource2;

    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Budget Details!A1:D1');
    }
}


