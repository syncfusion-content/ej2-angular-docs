import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'



import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { closest } from '@syncfusion/ej2-base';
import { BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        SpreadsheetAllModule
    ],


standalone: true,
    selector: 'app-container',
    template: "<ejs-spreadsheet #spreadsheet (contextMenuBeforeOpen)="contextMenuBeforeOpen($event)"></ejs-spreadsheet>"
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent | undefined;
    contextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
        if (closest(args.event.target as Element, '.e-sheet-content')) {
            console.log('Cell Context Menu');
        } else if (closest(args.event.target as Element, '.e-colhdr-table')) {
            console.log('Column Header Context Menu');
        } else if (closest(args.event.target as Element, '.e-rowhdr-table')) {
            console.log('Row Header Context Menu');
        } else if (closest(args.event.target as Element, '.e-toolbar-item')) {
            console.log('Footer Context Menu');
        }
    }
};



