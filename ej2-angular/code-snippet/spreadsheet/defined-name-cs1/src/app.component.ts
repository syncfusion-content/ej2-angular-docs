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
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" (beforeDataBound)="beforeDataBound()" [showRibbon]="false" [showSheetTabs]="false">
                <e-definednames>
                  <!-- Setting names for 'categories', 'monthly spendings' and 'annual spendings' ranges. -->
                  <e-definedname name="Categories" refersTo="=Budget Details!A3:A11"></e-definedname>
                  <e-definedname name="MonthlySpendings" refersTo="=Budget Details!B3:B11"></e-definedname>
                  <e-definedname name="AnnualSpendings" refersTo="=Budget Details!C3:C11"></e-definedname>
                </e-definednames>
                <e-sheets>
                  <e-sheet name="Budget Details">
                    <e-ranges>
                      <e-range [dataSource]="data" startCell="A2"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=150></e-column>
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
                          <!-- Initializing the formulas using defined names. -->
                          <e-cell formula="=SUM(MonthlySpendings)"></e-cell>
                          <e-cell formula="=SUM(AnnualSpendings)"></e-cell>
                          <e-cell formula="=SUM(LastYearSpendings)"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Number of Categories" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=COUNTA(Categories)"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Average Spend" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=AVERAGE(MonthlySpendings)" format="$#,##0"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Min Spend" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=MIN(MonthlySpendings)" format="$#,##0"></e-cell>
                        </e-cells>
                      </e-row>
                      <e-row>
                        <e-cells>
                          <e-cell [index]=1 value="Max Spend" [colSpan]=2 [style]="{ fontWeight: 'bold', textAlign: 'right' }"></e-cell>
                          <e-cell [index]=3 formula="=Max(MonthlySpendings)" format="$#,##0"></e-cell>
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

    beforeDataBound() {
        // Adding name dynamically for `last year spending` and `percentage change` ranges.
        this.spreadsheetObj!.addDefinedName({ name: 'LastYearSpendings', refersTo: '=D3:D11' });
        this.spreadsheetObj!.addDefinedName({ name: 'PercentageChange', refersTo: '=E3:E11' });
    }

    created() {
        // Removing the unwanted `PercentageChange` named range
        this.spreadsheetObj!.removeDefinedName('PercentageChange', '');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
        this.spreadsheetObj!.numberFormat('$#,##0', 'B3:D12');
        this.spreadsheetObj!.numberFormat('0%', 'E3:E12');
        this.spreadsheetObj!.setRowHeight(30,1);
    }
}


