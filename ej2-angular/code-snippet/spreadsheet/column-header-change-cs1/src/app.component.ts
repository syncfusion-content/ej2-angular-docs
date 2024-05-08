import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, CellRenderEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
  selector: 'app-container',
  template: `<ejs-spreadsheet #spreadsheet (beforeCellRender)="beforeCellRender($event)"></ejs-spreadsheet>`
})
export class AppComponent {
  @ViewChild('spreadsheet')
  spreadsheetObj: SpreadsheetComponent | undefined;
  beforeCellRender(args: CellRenderEventArgs) {
    // Condition to check whether the rendered element is header cell.
    if (
      args.colIndex >= 0 &&
      args.colIndex <= 10 &&
      args.element.classList.contains('e-header-cell')
    ) {
      let text = 'custom header ' + args.colIndex.toString();
      // Add the custom text to the innerText of the element.
      args.element.innerText = text;
    }
  }
}


