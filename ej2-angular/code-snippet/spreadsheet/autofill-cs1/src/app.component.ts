import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { defaultData } from './datasource';

enableRipple(true);

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<div>
    <button class='e-btn' (click)='onclick()'>Change showFillOptions</button>
    <ejs-spreadsheet #spreadsheet (created)="created()" >
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range [dataSource]="budgetData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=100></e-column>
                      <e-column [width]=100></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet></div>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    budgetData: object[] = defaultData;
    onclick(): void {
        var showFillOptions = this.spreadsheetObj!.autoFillSettings.showFillOptions;
        this.spreadsheetObj!.autoFillSettings.showFillOptions = !showFillOptions; //To change whether fill options need to be shown or not.
    }

    created() {
        this.spreadsheetObj!.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheetObj!.autoFill('D4:D11','D2:D3', 'Down','CopyCells');
        this.spreadsheetObj!.autoFill('E4:E11','E2:E3','Down','FillSeries');
        this.spreadsheetObj!.autoFill('B4:B11','B2:B3','Down','FillFormattingOnly');
        this.spreadsheetObj!.autoFill('C4:C11','C2:C3','Down','FillWithoutFormatting');
    }
}


