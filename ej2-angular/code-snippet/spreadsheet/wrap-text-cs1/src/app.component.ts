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
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false">
                <e-sheets>
                  <e-sheet name="Movie List">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [index]=1 [width]=100></e-column>
                      <e-column [width]=140></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=150></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=90></e-column>
                      <e-column [width]=180></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [height]=30></e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=7 [wrap]="true"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=7 [wrap]="true"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=7 [wrap]="true"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=7 [wrap]="true"></e-cell>
                        </e-cells>
                      </e-row>
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
        this.spreadsheetObj!.cellFormat({ verticalAlign: 'middle' }, 'A1:H5');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'A2:B5');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D2:D5');

        // To wrap the cells from E2 to E5 range
        this.spreadsheetObj!.wrap('E2:E5');
        // To unwrap the H3 cell
        this.spreadsheetObj!.wrap('H3', false);
    }
}


