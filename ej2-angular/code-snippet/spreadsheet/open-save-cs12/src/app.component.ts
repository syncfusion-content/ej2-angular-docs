import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import {
  SheetModel,
  ProtectSettingsModel,
  getRangeAddress,
} from '@syncfusion/ej2-spreadsheet';

@Component({
imports: [
        
        DropDownButtonModule,
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet openUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/open' allowOpen='true' (openComplete)='openComplete($event)'> </ejs-spreadsheet>"
})
export class AppComponent {
    @ViewChild('spreadsheet')
    public spreadsheetObj!: SpreadsheetComponent;

    openComplete(args: Object) {
        let sheets: SheetModel[] = this.spreadsheetObj.sheets;
        for (let index: number = 0; index < sheets.length; index++) {
            let name: string = this.spreadsheetObj.sheets[index].name!;
            let protectSetting: ProtectSettingsModel = {
                selectCells: true,
                formatCells: false,
            };

            //To protect the sheet using sheet name
            this.spreadsheetObj.protectSheet(name, protectSetting);
            let address: string = getRangeAddress([
                0,
                0,
                sheets[index].usedRange?.rowIndex!,
                sheets[index].usedRange?.colIndex!
            ]);
            //To lock the used range cells
            this.spreadsheetObj.lockCells(name + '!' + address, true);
        }
    }
}


