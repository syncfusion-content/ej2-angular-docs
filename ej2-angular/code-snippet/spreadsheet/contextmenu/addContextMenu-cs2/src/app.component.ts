import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';


@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (contextMenuBeforeOpen)="contextMenuBeforeOpen()">
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;

     contextMenuBeforeOpen() {
        // To add context menu items.
      this.spreadsheetObj!.removeContextMenuItems(["Insert Column"], false); //Items that needs to be removed, Set `true` if the given `text` is a unique id.
    }
}


