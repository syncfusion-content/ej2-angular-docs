import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { UploaderModule } from '@syncfusion/ej2-angular-inputs'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        DropDownButtonModule,
        UploaderModule,
        SpreadsheetAllModule
    ],


standalone: true,
  selector: 'app-container',
  template:
    "<ejs-spreadsheet #spreadsheet openUrl='https://services.syncfusion.com/angular/production/api/spreadsheet/open' allowOpen='true' (beforeOpen)='beforeOpen($event)'> </ejs-spreadsheet>",
})

export class AppComponent {
  @ViewChild('spreadsheet')
  public spreadsheetObj!: SpreadsheetComponent;
  beforeOpen(args: BeforeOpenEventArgs) {
    args.requestData = {
      ...args.requestData,
      headers: { Authorization: 'YOUR TEXT' },
    };
  }
}
