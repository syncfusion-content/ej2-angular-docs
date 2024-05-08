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
  template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showRibbon]="false"
                [showSheetTabs]="false">
                <e-sheets>
                  <e-sheet>
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="A2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=150></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [height]=40 [customHeight]="true">
                        <e-cells>
                          <e-cell value="Monthly Expense" [colSpan]=5 [style]="{ textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' }"></e-cell>
                          <e-cell formula="=SUM(E2:E10)"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [index]=11>
                        <e-cells>
                          <e-cell value="Totals" [style]="{ fontStyle: 'italic', fontWeight: 'bold' }"></e-cell>
                          <!-- Calculating total of each column data through cell binding. -->
                          <e-cell formula="=SUM(B3:B11)"></e-cell>
                          <e-cell formula="=SUM(C3:C11)"></e-cell>
                          <e-cell formula="=SUM(D3:D11)"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Number of Categories" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=COUNTA(A3:A11)"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Average Spend" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=AVERAGE(B3:B11)" format="$#,##0"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Min Spend" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=MIN(B3:B11)" format="$#,##0"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Max Spend" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=Max(B3:B11)" format="$#,##0"></e-cell>
                        </e-cells>
                      </e-row>
                    </e-rows>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`,
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj!: SpreadsheetComponent;

  data: object[] = dataSource;

  // Custom function to calculate percentage between two cell values.
  calculatePercentage(firstCell: string, secondCell: string): number {
    return Number(firstCell) / Number(secondCell);
  }

  created() {
    this.spreadsheetObj.cellFormat(
      { fontWeight: 'bold', textAlign: 'center' },
      'A2:F2'
    );
    this.spreadsheetObj.numberFormat('$#,##0', 'B3:D12');
    this.spreadsheetObj.numberFormat('0%', 'E3:E12');
    // Adding custom function for calculating the percentage between two cells.
    this.spreadsheetObj.addCustomFunction(
      this.calculatePercentage,
      'PERCENTAGE'
    );

    // Calculate percentage using custom added formula in E11 cell.
    this.spreadsheetObj.updateCell({ formula: '=PERCENTAGE(C11,D11)' }, 'E11');
    // Calculate expressions using computeExpression in E10 cell.
    this.spreadsheetObj.updateCell(
      { value: this.spreadsheetObj.computeExpression('C10/D10') as string },
      'E10'
    );
    // Calculate custom formula values using computeExpression in E12 cell.
    this.spreadsheetObj.updateCell(
      {
        value: this.spreadsheetObj.computeExpression(
          '=PERCENTAGE(C12,D12)'
        ) as string,
      },
      'E12'
    );
    // Calculate SUM (built-in) formula values using computeExpression in D12 cell.
    this.spreadsheetObj.updateCell(
      {
        value: this.spreadsheetObj.computeExpression('=SUM(D3:D11)') as string,
      },
      'D12'
    );
  }
}
