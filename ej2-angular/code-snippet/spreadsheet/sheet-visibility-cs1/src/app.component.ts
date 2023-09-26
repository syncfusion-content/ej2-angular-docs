

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { dataSource } from './datasource';

enableRipple(true);

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [openUrl]="openUrl"
                [saveUrl]="saveUrl" [showFormulaBar]="false" [showRibbon]="false">
                <e-sheets>
                  <!-- By default, state is set as 'visible'. We don’t  need to said it in the sample. -->
                  <e-sheet name="Visible Sheet" state="Visible">
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
                  <!-- Sets sheet state as 'VeryHidden'. It can't be unhidden. -->
                  <e-sheet name="Very Hidden Sheet" state="VeryHidden">
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
                  <!-- Sets sheet state as 'Hidden'. It can be unhidden dynamically. -->
                  <e-sheet name="Hidden Sheet" state="Hidden">
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
    openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
    saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save'

    created() {
        // Applies style formatting to active visible sheet
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // Applies style formatting to active hidden sheet
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Hidden Sheet!A1:H1');
        this.spreadsheetObj!.cellFormat({ textAlign: 'center' }, 'Hidden Sheet!D2:H11');
    }
}


