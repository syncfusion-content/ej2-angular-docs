import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, getFormatFromType, NumberFormatType } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false"
              [showRibbon]="false" [showSheetTabs]="false" [allowInsert]="false" [allowDelete]="false">
                <e-sheets>
                  <e-sheet [showGridLines]="false" selectedRange="U15">
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="A2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=140></e-column>
                      <e-column [width]=140></e-column>
                      <e-column [width]=160></e-column>
                      <e-column [width]=160></e-column>
                      <e-column [width]=160></e-column>
                      <e-column [width]=120></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [height]=35 [customHeight]="true">
                        <e-cells>
                          <e-cell value="Sales Team Summary" [colSpan]=6 [style]="{ verticalAlign: 'middle', textAlign: 'center', fontSize: '16pt', fontWeight: 'bold', border: '1px solid #e0e0e0', backgroundColor: '#EEEEEE', color: '#279377' }"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [index]=10>
                        <e-cells>
                          <e-cell [index]=1 value="Total:" [style]="{ fontWeight: 'bold', fontStyle: 'italic' }"></e-cell>
                          <e-cell formula="=SUM(C3:C10)" [format]="accountingFormat"></e-cell>
                          <!-- Applied number format to C11, D11 & E11 through cell binding -->
                          <e-cell formula="=SUM(D3:D10)" format='_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'></e-cell>
                          <e-cell formula="=SUM(E3:E10)" format='_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'></e-cell>
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

    // If the format string is not known, you can get the format string using `getFormatFromType` function like below
    accountingFormat = getFormatFromType(<NumberFormatType>'Accounting');

    // Applied number formatting to the range of cells using 'numberFormat' method once the component is loaded
    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', textAlign: 'center',
          color: '#ffffff', borderBottom: '1px solid #e0e0e0' }, 'A2:F2');
        this.spreadsheetObj!.cellFormat({ borderTop: '1px solid #e0e0e0', backgroundColor: '#EEEEEE' }, 'A11:F11');
        this.spreadsheetObj!.setBorder({ border: '1px solid #e0e0e0' }, 'A2:F11', 'Outer');
        // Applied Accounting format to the cells from C3 to E10 range.
        this.spreadsheetObj!.numberFormat('_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)', 'C3:E10');
        // Applied Percentage format to the cells from C3 to E11 range.
        this.spreadsheetObj!.numberFormat('0%', 'F3:F10');
        // applied the custom number format for cell form D3 to D10 range
        this.spreadsheetObj!.numberFormat('[Red][<=2000]$#,##0.00;[Blue][>2000]$#,##0.00', 'D3:D10');
        // applied the custom number format for cell from F3 to F10 range
        this.spreadsheetObj!.numberFormat('#,##0.00_);[Red](#,##0.00)', 'F3:F10');

    }
}


