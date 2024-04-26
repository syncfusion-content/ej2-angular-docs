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
                  <e-sheet name="Merge Cells">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=90></e-column>
                      <e-column [width]=150></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [height]=35></e-row>
                      <e-row [height]=35>
                        <e-cells>
                          <!-- Merging the 2nd cells of rows 2 and 3 through cell binding. -->
                          <e-cell [index]=1 [rowSpan]=2></e-cell>
                          <!-- Merging the 2nd row's 3rd and 4th cells through cell binding. -->
                          <e-cell [colSpan]=2></e-cell>
                          <!-- Merging the 2nd row's 7th, 8th and 9th cells through cell binding. -->
                          <e-cell [index]=6 [colSpan]=3></e-cell>
                          <!-- Merging the 2nd and 3rd rows 11th, 12th and 13th cells through cell binding. -->
                          <e-cell [index]=10 [rowSpan]=2 [colSpan]=3></e-cell>
                          <e-cell [index]=13 [colSpan]=2></e-cell>
                          <e-cell [index]=17 [colSpan]=2></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [height]=35>
                        <e-cells>
                          <e-cell [index]=3 [colSpan]=3></e-cell>
                          <e-cell [index]=6 [colSpan]=4></e-cell>
                          <e-cell [index]=13 [colSpan]=3></e-cell>
                          <e-cell [index]=17 [colSpan]=2></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [height]=35>
                        <e-cells>
                          <e-cell [index]=2 [colSpan]=3></e-cell>
                          <e-cell [index]=5 [colSpan]=2></e-cell>
                          <e-cell [index]=7 [colSpan]=3></e-cell>
                          <e-cell [index]=15 [colSpan]=2></e-cell>
                          <e-cell [index]=17 [colSpan]=2></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [height]=35>
                        <e-cells>
                          <e-cell [index]=2 [colSpan]=3></e-cell>
                          <e-cell [index]=6 [colSpan]=4></e-cell>
                          <e-cell [index]=16 [colSpan]=2></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [height]=35>
                        <e-cells>
                          <e-cell [index]=2 [colSpan]=4></e-cell>
                          <e-cell [index]=7 [colSpan]=3></e-cell>
                          <e-cell [index]=15 [colSpan]=2></e-cell>
                          <e-cell [index]=17 [colSpan]=2></e-cell>
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
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:S1');
        this.spreadsheetObj!.numberFormat('h:mm AM/PM', 'C1:S1');
        this.spreadsheetObj!.cellFormat({ verticalAlign: 'middle' }, 'A1:S11');
          // Merging the `K4:M4` cells using method
        this.spreadsheetObj!.merge('K4:M4');
        // Merging the 5th and 6th row cells across 11th, 12th and 13th column
        this.spreadsheetObj!.merge('K5:M6', 'Vertically');
        // Merging the 18th and 19th column cells across 2nd, 3rd and 4th row
        this.spreadsheetObj!.merge('N4:O6', 'Horizontally');
    }
}


