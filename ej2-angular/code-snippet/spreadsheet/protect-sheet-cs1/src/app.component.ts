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
  template: `<ejs-spreadsheet #spreadsheet (created)="created()">
                <e-sheets>
                  <e-sheet name="Budget" [isProtected]="true" [protectSettings]="{ selectCells: true }">
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
                  <e-sheet name="Salary">
                    <e-ranges>
                      <e-range [dataSource]="salaryData"></e-range>
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

  budgetData: object[] = dataSource1;

  salaryData: object[] = dataSource2;

  created() {
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
    this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
    this.spreadsheetObj!.protectSheet(1, { selectCells: true }, "syncfusion"); // protect sheet with password
  }
}


