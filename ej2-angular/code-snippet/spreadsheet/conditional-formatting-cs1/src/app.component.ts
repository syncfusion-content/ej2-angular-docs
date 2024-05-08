import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { conditionalFormatData } from './datasource';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()" [showFormulaBar]="false">
                <e-sheets>
                  <e-sheet name="Car Sales Record">
                    <e-ranges>
                      <e-range [dataSource]="data"></e-range>
                    </e-ranges>
                    <e-conditionalformats>
                      <e-conditionalformat type="GreaterThan" cFColor="RedFT" value="700" range="B2:B9"></e-conditionalformat>
                      <e-conditionalformat type="Bottom10Items" cFColor="YellowFT" value="4" range="C2:C9"></e-conditionalformat>
                      <e-conditionalformat type="BlueDataBar" range="D2:D9"></e-conditionalformat>
                    </e-conditionalformats>
                    <e-columns>
                      <e-column [index]=1 [width]=120></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

    data: object[] = conditionalFormatData;

    created() {
        this.spreadsheetObj!.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:N1');
        this.spreadsheetObj!.conditionalFormat({ type: 'RYGColorScale', range: 'E2:E9' });
        this.spreadsheetObj!.conditionalFormat({ type: 'ThreeArrows', range: 'H2:H9' });
        //Custom Format
        this.spreadsheetObj!.conditionalFormat({ type: 'Top10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold'}}, range: 'F2:F9' });
        this.spreadsheetObj!.conditionalFormat({ type: 'Bottom10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold'}}, range: 'G2:G9' });
    }
}


