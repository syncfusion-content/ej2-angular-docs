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
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false" [showRibbon]="false">
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
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
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    data: object[] = dataSource;

    created() {
        // Applies style formatting to the active sheet before inserting a new sheet
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // inserting a new sheet with data at 1st index
        // You can also insert empty sheets by specifying the start and end sheet index instead of sheet model
        this.spreadsheetObj!.insertSheet([{
            index: 1,
            name: 'Inserted Sheet',
            ranges: [{ dataSource: this.data }],
            columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
                { width: 85 }]
        }]);
        // Applies style formatting for the inserted sheet
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Inserted Sheet!A1:H1');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'Inserted Sheet!D2:H11');
    }
}


