import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { dataSource1, dataSource2 } from './datasource';


@Component({
    imports: [

        SpreadsheetAllModule
    ],


    standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [openUrl]="openUrl" allowOpen="true" [saveUrl]="saveUrl" allowSave="true" [allowPrint]="false">
                <e-sheets>
                  <e-sheet name="Budget">
                    <e-ranges>
                      <e-range [dataSource]="budgetData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                  <e-sheet name="Salary">
                    <e-ranges>
                      <e-range [dataSource]="salaryData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                      </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
    public budgetData: object[] = dataSource1;
    public salaryData: object[] = dataSource2;
    public openUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/open';
    public saveUrl = 'https://services.syncfusion.com/angular/production/api/spreadsheet/save';
    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
    }
}


