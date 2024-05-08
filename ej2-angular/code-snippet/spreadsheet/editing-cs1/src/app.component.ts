import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellEditEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { dataSource } from './datasource';

enableRipple(true);

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" (cellEdit)="cellEdit($event)" (beforeCellSave)="beforeCellSave($event)" [showSheetTabs]="false" [showRibbon]="false">
                <e-sheets>
                  <e-sheet selectedRange="E11">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=120></e-column>
                      <e-column [width]=180></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=120></e-column>
                      <e-column [width]=120></e-column>
                    </e-columns>
                    <e-rows>
                      <e-row [index]=10>
                        <e-cells>
                          <e-cell [index]=3 value="Total Amount:" [style]="{ fontWeight: 'bold' }"></e-cell>
                          <e-cell formula="=SUM(E2:E10)"></e-cell>
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
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'A2:A10');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'C2:C10');
        this.spreadsheetObj!.numberFormat('$#,##0.00', 'D2:D10');
        this.spreadsheetObj!.numberFormat('$#,##0.00', 'E2:E11');
    }

    // Triggers before going to the editing mode.
    cellEdit(args: CellEditEventArgs): void {
        // Preventing the editing in 5th(Amount) column.
        if (args.address.includes('E')) { args.cancel = true; }
    }

    // Trigger before saving the edited cell content.
    beforeCellSave(args: CellEditEventArgs): void {
        // Prevent saving the edited changes in 4th(Rate) column.
        if (args.address.includes('D')) {
            args.cancel = true;
            // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
            this.spreadsheetObj!.closeEdit();
        }
    }
}


