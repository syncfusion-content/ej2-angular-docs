import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellStyleModel } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false" [showRibbon]="false"
                [showSheetTabs]="false" [allowInsert]="false" [allowDelete]="false" [allowEditing]="false">
                <e-sheets>
                  <e-sheet [showGridLines]="false" selectedRange="U15">
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="A2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=100></e-column>
                      <e-column [width]=200></e-column>
                      <e-column [width]=110></e-column>
                      <e-column [width]=140></e-column>
                      <e-column [width]=90></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [height]=35 [customHeight]="true">
                        <e-cells>
                          <!-- Applied styles to 'A1' cell through cell binding -->
                          <e-cell value="Order Summary" [colSpan]=5 [style]="{ fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' }"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [height]=30>
                        <e-cells>
                          <!-- Applied styles to 'C2' cell through cell property binding -->
                          <e-cell [index]=2 [style]="{ textAlign: 'right' }"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                      <e-row [height]=30></e-row>
                    </e-rows>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    data: object[] = dataSource;

    // Applied cell formatting to the range of cells using 'cellFormat' method once the component is loaded
    created() {
        // Setting common styles to table header cells
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
        // Setting common styles to whole table cells
        this.spreadsheetObj!.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
        // Column wise styles setting
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'A2:A12');
        // Setting text-indent to 2 and 4 column
        const style: CellStyleModel = { textAlign: 'left', textIndent: '8pt' };
        this.spreadsheetObj!.cellFormat(style, 'B2:B12');
        this.spreadsheetObj!.cellFormat(style, 'D2:D12');
        this.spreadsheetObj!.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'E2:E12');
        // Applied border to range of cells using 'setBorder' method
        this.spreadsheetObj!.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
        this.spreadsheetObj!.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
        this.spreadsheetObj!.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
        this.spreadsheetObj!.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
        this.spreadsheetObj!.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
        this.spreadsheetObj!.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
        this.spreadsheetObj!.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
        this.spreadsheetObj!.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
        this.spreadsheetObj!.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
        this.spreadsheetObj!.cellFormat({ color: '#62c9e8' }, 'E6');
        this.spreadsheetObj!.cellFormat({ color: '#62c9e8' }, 'E10');
        this.spreadsheetObj!.cellFormat({ color: '#ff5b5b' }, 'E7');
    }
}


