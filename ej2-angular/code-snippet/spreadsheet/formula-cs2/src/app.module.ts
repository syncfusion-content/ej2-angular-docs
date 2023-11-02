import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SpreadsheetAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }