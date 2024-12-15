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
template: `<ejs-spreadsheet #spreadsheet (created)="created()" calculationMode="Automatic">
                <e-sheets>
                  <e-sheet name="Product Details">
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="A1"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=92></e-column>
                      <e-column [width]=96></e-column>
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
    }
}


